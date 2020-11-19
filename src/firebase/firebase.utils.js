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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
