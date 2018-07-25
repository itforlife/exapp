import { Document as FirestorterDocument } from 'firestorter'
import { action, computed, observable } from 'mobx'
import { usersCollection } from '../../firebase'
import { loginForm, registerForm } from './authenticationForm'

interface IFBProfile {
    first_name: string
    last_name: string
    birthday: string
}
interface ITwitterProfile {
    name: string
}

export class AuthenticationStore {
  @observable isLoginFormActive = true;
  @observable isRegisterFormActive = false;
  @observable currentUser = null;
  auth: firebase.auth.Auth
  loginForm: typeof loginForm
  registerForm: typeof registerForm
  usersCollection: typeof usersCollection
  facebookProvider: firebase.auth.FacebookAuthProvider
  twitterProvider: firebase.auth.TwitterAuthProvider

  constructor(config) {
    this.auth = config.auth;
    this.usersCollection = config.usersCollection;
    this.loginForm = loginForm;
    this.registerForm = registerForm;
    this.facebookProvider = config.facebookProvider;
    this.twitterProvider = config.twitterProvider;
    this.currentUser = null;
    this.waitForUser();
  }

    @action
    public setLoginFormActive = () => {
        this.isLoginFormActive = true
        this.isRegisterFormActive = false
    }

    @action
    public setRegisterFormActive = () => {
        this.isLoginFormActive = false
        this.isRegisterFormActive = true
    }

  @action
  createUser = async () => {

    try {
      const result = await this.auth.createUserWithEmailAndPassword(
        this.registerForm.$('email').value,
        this.registerForm.$('password').value
      )
      this.addUserCollection(
        {
          email: result.user.email,
          userId: result.user.uid,
          firstName: this.registerForm.$('firstName').value,
          lastName: this.registerForm.$('lastName').value,
          signInMethod: 'email',
        },
        true
      )
      this.registerForm.clear()
    } catch (error) {
      // Handle Errors here.
      this.errorMessage = error.message
    }

    public signInFacebook = async () => {
        try {
            const result = await this.auth.signInWithPopup(
                this.facebookProvider
            )
            const profile = result.additionalUserInfo.profile as IFBProfile

            this.addUserCollection(
                {
                    email: result.user.email,
                    userId: result.user.uid,
                    firstName: profile.first_name,
                    lastName: profile.last_name,
                    birthday: profile.birthday,
                    signInMethod: result.credential.signInMethod,
                },
                result.additionalUserInfo.isNewUser
            )
        } catch (error) {
            /*tslint:disable:no-console */
            console.log('errorCode', error.message)
            console.log('errorCode', error.email)
            console.log('errorCode', error.credential)
            /*tslint:enable:no-console */
        }
    }

    public signInTwitter = async () => {
        try {
            const result = await this.auth.signInWithPopup(this.twitterProvider)
            const profile = result.additionalUserInfo.profile as ITwitterProfile
            this.addUserCollection(
                {
                    userId: result.user.uid,
                    firstName: profile.name,
                    lastName: profile.name,
                    signInMethod: result.credential.signInMethod,
                },
                result.additionalUserInfo.isNewUser
            )
        } catch (error) {
            /*tslint:disable:no-console */
            console.log('errorCode', error.message)
            console.log('errorCode', error.email)
            console.log('errorCode', error.credential)
            /*tslint:enable:no-console */
        }
    }

  @action
  signInEmail = async () => {
    try {
      await this.auth.signInWithEmailAndPassword(
        this.loginForm.$('email').value,
        this.loginForm.$('password').value
      )
      this.loginForm.clear()
    } catch (error) {
      this.errorMessage = error.message
    }

    public addUserCollection = async (userInfo, isNewUser) => {
        if (isNewUser) {
            const userDoc = new FirestorterDocument(`users/${userInfo.userId}`)
            await userDoc.set(userInfo)
        }
    }

    @computed
    get userProfile() {
        return this.isUserLogedIn && this.currentUser && this.currentUser.data
            ? this.currentUser.data
            : {}
    }

  waitForUser = () => {
    return new Promise((resolve) => {
     this.auth.onAuthStateChanged((user) => {
       this.handleUserAuthChange(user, resolve)
     })
    }) 
 }

 @action
 handleUserAuthChange = async (user, resolve) => {
   if (user) {
     const currentUser = new FirestorterDocument(`users/${user.uid}`);
     currentUser.fetch();
     await currentUser.ready();
     this.currentUser = currentUser;
     resolve(this.currentUser)
   } else {
     this.currentUser = null;
     
   }
 }

  signOut = async () => {
    await this.auth.signOut()
  }
}
