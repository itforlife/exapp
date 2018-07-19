import { observable, action, computed } from 'mobx';
import { Document } from 'firestorter';
import { loginForm, registerForm } from './authenticationForm';


export class AuthenticationStore {

  @observable isUserLogedIn = false;
  @observable isLoading = false;
  @observable isLoginFormActive = true;
  @observable isRegisterFormActive = false;
  @observable currentUser = {};
  @observable form;
  constructor(config) {
    this.auth = config.auth;
    this.usersCollection = config.usersCollection;
    this.loginForm = loginForm;
    this.registerForm = registerForm;
    this.facebookProvider = config.facebookProvider;
    this.twitterProvider = config.twitterProvider;
    this.currentUser = null;
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.setAuthenticationUser({ isUserLogedIn: true });
        this.currentUser = new Document(`users/${this.auth.currentUser.uid}`);
      } else {
        this.setAuthenticationUser({ isUserLogedIn: false });
        this.currentUser = null;
      }
    })
  }

  @action
  setAuthenticationUser = (userInfo) => {
    this.isUserLogedIn = userInfo.isUserLogedIn;
  }

  @action 
  setLoginFormActive = () => {
    this.isLoginFormActive = true;
    this.isRegisterFormActive = false;
  }

  @action 
  setRegisterFormActive = () => {
    this.isLoginFormActive = false;
    this.isRegisterFormActive = true;
  }

  @action
  createUser = async () => {
    this.isLoading = true;

    try {
      const result = await this.auth.createUserWithEmailAndPassword(this.registerForm.$('email').value, this.registerForm.$('password').value);
      this.addUserCollection({
        email: result.user.email,
        userId: result.user.uid,
        firstName: this.registerForm.$('firstName').value,
        lastName: this.registerForm.$('lastName').value,
        signInMethod: 'email'
      }, true)
      this.isLoading = false;
      this.registerForm.clear();
    } catch(error) {
        // Handle Errors here.
        this.errorMessage = error.message;
        this.isLoading = false;
    };
  }

  signInFacebook = async() => {
    try {
        const result = await this.auth.signInWithPopup(this.facebookProvider);
          const profile = result.additionalUserInfo.profile;
        
         this.addUserCollection({
            email: result.user.email,
            userId: result.user.uid,
            firstName: profile.first_name,
            lastName: profile.last_name,
            birthday: profile.birthday,
            signInMethod: result.credential.signInMethod
          }, result.additionalUserInfo.isNewUser);
    }
    catch(error) {
      console.log('errorCode', error.message);
      console.log('errorCode', error.email);
      console.log('errorCode', error.credential);

    }
  }

  signInTwitter = async() => {
    try {
        const result  = await this.auth.signInWithPopup(this.twitterProvider);
        const profile = result.additionalUserInfo.profile;
        this.addUserCollection({
          userId: result.user.uid,
          firstName: profile.name,
          lastName: profile.name,
          signInMethod: result.credential.signInMethod
        }, result.additionalUserInfo.isNewUser)
    }
    catch(error) {
      console.log('errorCode', error.message);
      console.log('errorCode', error.email);
      console.log('errorCode', error.credential);

    }
  }

  @action
  signInEmail = async () => {
    this.isLoading = true;
    try {
      await this.auth.signInWithEmailAndPassword(this.loginForm.$('email').value, this.loginForm.$('password').value);
      this.isLoading = false;
      this.loginForm.clear();
    } catch(error) {
      this.errorMessage = error.message;
    };
  }

  addUserCollection = async (userInfo, isNewUser) => {
    if(isNewUser) {
      const userDoc = new Document(`users/${userInfo.userId}`);
      await userDoc.set(userInfo);
    }
  }

  @computed
  get userProfile() {
    return this.isUserLogedIn && this.currentUser && this.currentUser.data ? this.currentUser.data : {};
  }

  signOut = async () => {
    await this.auth.signOut();
  }
}
