import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDODsSyqtIKqMRP4uAHQcjAlwmvnllblPs',
  authDomain: 'exapp-f3519.firebaseapp.com',
  databaseURL: 'https://exapp-f3519.firebaseio.com',
  projectId: 'exapp-f3519',
  storageBucket: 'exapp-f3519.appspot.com',
  messagingSenderId: '513151536556',
}

class API {
  constructor() {
    firebase.initializeApp(config)
    this.store = firebase.firestore
    this.auth = firebase.auth
  }

  get campaigns() {
    return this.store().collection('campaigns')
  }
}

export default new API()
