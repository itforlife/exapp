import { observable, action } from 'mobx';


export class AuthenticationStore {

  @observable inputValues = {};
  @observable isUserLogedIn = false;
  @observable isLoading = false;
  @observable errorMessage;
  @observable isLoginFormActive = true;
  @observable isRegisterFormActive = false;

  constructor(config) {
    this.auth = config.auth;
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
  fieldChange = (fieldName, value) => {
    this.inputValues[fieldName] = value;
  }

  @action
  createUser = async () => {
    this.isLoading = true;
    try {
      await this.auth.createUserWithEmailAndPassword(this.inputValues.email, this.inputValues.password);
      this.isLoading = false;
      this.inputValues = {};
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
      await this.auth.signInWithEmailAndPassword(this.inputValues.email, this.inputValues.password);
      this.isLoading = false;
      this.inputValues = {};
    } catch(error) {
      this.errorMessage = error.message;
    };
  }

  get userProfile() {
    return this.auth.currentUser;
  }

  signOut = async () => {
    await this.auth.signOut();
  }
}
