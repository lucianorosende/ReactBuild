// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvCkNefOVyHCsu9L4N-kbRWRoagKHhiNI",
  authDomain: "reactappch.firebaseapp.com",
  projectId: "reactappch",
  storageBucket: "reactappch.appspot.com",
  messagingSenderId: "629434443691",
  appId: "1:629434443691:web:06aa88ca3dd74aa88fd4ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireStoreDB = getFirestore(app)