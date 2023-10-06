// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7QF_k3TKf8QASLc7C2r8btmO2-r4oKgA",
  authDomain: "musee-bagasso.firebaseapp.com",
  projectId: "musee-bagasso",
  storageBucket: "musee-bagasso.appspot.com",
  messagingSenderId: "296184481510",
  appId: "1:296184481510:web:f4f3bcaba28b4bc5019d27",
  measurementId: "G-5X3HE6PRFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;