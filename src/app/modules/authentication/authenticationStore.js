import { observable, action } from 'mobx';
import { loginForm, registerForm } from './authenticationForm';


export class AuthenticationStore {

  @observable isUserLogedIn = false;
  @observable isLoading = false;
  @observable isLoginFormActive = true;
  @observable isRegisterFormActive = false;
  @observable form;
  constructor(config) {
    this.auth = config.auth;
    this.loginForm = loginForm;
    this.registerForm = registerForm;
    this.facebookProvider = config.facebookProvider;
    this.twitterProvider = config.twitterProvider;
    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.setAuthenticationUser({ isUserLogedIn: true });
      } else {
        this.setAuthenticationUser({ isUserLogedIn: false });
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
      await this.auth.createUserWithEmailAndPassword(this.registerForm.$('email').value, this.registerForm.$('password').value);
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
        await this.auth.signInWithPopup(this.facebookProvider);
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

  get userProfile() {
    return this.auth.currentUser;
  }

  signOut = async () => {
    await this.auth.signOut();
    console.log('signout')
  }
}
