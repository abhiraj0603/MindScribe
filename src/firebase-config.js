// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoW6YnWbt2VltzUXxCcb9TA4LdtnQs6ZU",
  authDomain: "mindscribe-bed63.firebaseapp.com",
  projectId: "mindscribe-bed63",
  storageBucket: "mindscribe-bed63.appspot.com",
  messagingSenderId: "840181863803",
  appId: "1:840181863803:web:a0f57f13e080f657a019de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();