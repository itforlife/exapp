import firebase from 'firebase'
import 'firebase/firestore'
import {initFirestorter, Collection} from 'firestorter';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
}
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
initFirestorter({firebase: firebase});
const campaignsCollection = new Collection('campaigns');

export {
  campaignsCollection,
  firebase
};