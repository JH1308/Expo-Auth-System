import firebase from "firebase/compat/app";
import { getAuth } from 'firebase/auth';
import Constants from 'expo-constants';

// add firebase config
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth();

export { auth };