// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; // Import Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyC_nhdvzZIXlgEA1e__eCpxF24lvI2c9qk",
  authDomain: "mail-box-c0a66.firebaseapp.com",
  projectId: "mail-box-c0a66",
  storageBucket: "mail-box-c0a66.appspot.com",
  messagingSenderId: "574587962802",
  appId: "1:574587962802:web:df0cf4d924a29d2cd490ab",
  measurementId: "G-70KGERZQD2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database(); // Use Realtime Database instead of Firestore

export { firebase, db };
