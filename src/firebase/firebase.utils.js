import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAbrnCyZxZvC6eeuyrWoyowQWcQQYBR810",
    authDomain: "crown-db-feae9.firebaseapp.com",
    databaseURL: "https://crown-db-feae9.firebaseio.com",
    projectId: "crown-db-feae9",
    storageBucket: "crown-db-feae9.appspot.com",
    messagingSenderId: "1061154095893",
    appId: "1:1061154095893:web:0ae9ae335657e4b871df1c",
    measurementId: "G-4M9BVW44FC"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;