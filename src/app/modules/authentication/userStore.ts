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

export class UserStore {
  @observable public isLoginFormActive = true;
  @observable public isRegisterFormActive = false;
  @observable public currentUser = null;
  @observable public errorMessage: string;
  public auth: firebase.auth.Auth
  public loginForm: typeof loginForm
  public registerForm: typeof registerForm
  public usersCollection: typeof usersCollection
  public facebookProvider: firebase.auth.FacebookAuthProvider
  public twitterProvider: firebase.auth.TwitterAuthProvider

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
  public createUser = async () => {

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
  public signInEmail = async () => {
    try {
      await this.auth.signInWithEmailAndPassword(
        this.loginForm.$('email').value,
        this.loginForm.$('password').value
      )
      this.loginForm.clear()
    } catch (error) {
      this.errorMessage = error.message
    }
  }
  public addUserCollection = async (userInfo, isNewUser) => {
      if (isNewUser) {
          const userDoc = new FirestorterDocument(`users/${userInfo.userId}`)
          await userDoc.set(userInfo)
      }
  }
  public updateUserInformation = async (userInfo) => {
        await this.currentUser.update(userInfo)
  }
  @computed
  get userProfile() {
    return this.currentUser && this.currentUser.data
      ? this.currentUser.data
      : {}
  }

  public waitForUser = () => {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged((user) => {
        this.handleUserAuthChange(user, resolve)
      })
    }) 
  }
  public signOut = async () => {
    await this.auth.signOut()
  }
 
 @action
 private handleUserAuthChange = async (user, resolve) => {
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

}
