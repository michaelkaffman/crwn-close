import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwSaw-yKSnosv3Kq38EdGfczMlSNOkNOw",
    authDomain: "crwn-db-48a57.firebaseapp.com",
    projectId: "crwn-db-48a57",
    storageBucket: "crwn-db-48a57.appspot.com",
    messagingSenderId: "634071304043",
    appId: "1:634071304043:web:000ed20400aee7243dae2e"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


