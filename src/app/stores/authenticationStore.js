import { observable, action, reaction } from 'mobx';


export class AuthenticationStore {

  @observable inputValues = {};
  @observable isUserLogedIn = false;
  @observable isLoading = false;
  @observable errorMessage;
  @observable isLoginFormActive = true;
  @observable isRegisterFormActive = false;

  constructor(auth) {
    this.auth = auth;
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
  createUser = () => {
    this.isLoading = true;
    return this.auth.createUserWithEmailAndPassword(this.inputValues.email, this.inputValues.password)
    .then(user => {
          this.isLoading = false;
          this.inputValues = {};
    })
    .catch(action((error) => {
        // Handle Errors here.
        this.errorMessage = error.message;
        this.isLoading = false;
    }));

  }

  @action
  signInEmail = () => {
    this.isLoading = true;

    return this.auth.signInWithEmailAndPassword(this.inputValues.email, this.inputValues.password)
    .then(() => {
        this.isLoading = false;
        this.inputValues = {};
    })
    .catch(action((error) => {
      this.errorMessage = error.message;
    }));
  }

  get userProfile() {
    return this.auth.currentUser;
  }

  signOut = () => {
    this.auth.signOut().then(function() {
          //to be changed with a router store
          window.location.href = '/'
      }).catch(function(error) {
        // An error happened.
      });
  }
}
