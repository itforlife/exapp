import { firebase } from './store';
import { observable, action } from 'mobx';


class UserStore {

  @observable email;
  @observable password;
  @observable userName;
  @observable name;
  @observable isUserLogedIn = false;
  @observable isLoading = false;
  @observable errorMessage;
  constructor() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isUserLogedIn = true;
      } else {
        this.isUserLogedIn = false;
      }
    });
  }
  @action
  fieldChange = (fieldName, value) => {
    this[fieldName] = value;
  }

  @action
  createUser = () => {
    this.isLoading = true;
    return firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then(user => {
        this.userProfile.updateProfile({
            userName: this.userName,
            name: this.name
        }).then(user => {
            this.isLoading = false;
            this.email = '';
            this.password = '';
            this.userName = '';
            this.name = '';
        })
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

    return firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then(() => {
        this.isLoading = false;
        this.email = '';
        this.password = '';
    })
    .catch(action((error) => {
      this.errorMessage = error.message;
    }));
  }

  get userProfile() {
    console.log(firebase.auth().currentUser)
    return firebase.auth().currentUser;
  }

  signOut = () => {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
  }
}

export default new UserStore();