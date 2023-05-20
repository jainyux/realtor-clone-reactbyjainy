// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa8aAoBpfq7p-lqSDASqEKg2YlNJkVsbo",
  authDomain: "realtor-clone-react-744f0.firebaseapp.com",
  projectId: "realtor-clone-react-744f0",
  storageBucket: "realtor-clone-react-744f0.appspot.com",
  messagingSenderId: "246954556468",
  appId: "1:246954556468:web:d2ea6da0aff28288175e61"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()