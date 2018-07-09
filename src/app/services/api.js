import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
}

class API {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }

    const settings = {/* your settings... */ timestampsInSnapshots: true};
    this.store = firebase.firestore
    this.auth = firebase.auth
  }

  get campaigns() {
    return this.store().collection('campaigns')
  }
}

export default new API()
