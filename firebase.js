// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVzDqxJ0HzgNryJDbcNonjsm6poTYYUUw",
  authDomain: "wellnus-1c0bd.firebaseapp.com",
  projectId: "wellnus-1c0bd",
  storageBucket: "wellnus-1c0bd.appspot.com",
  messagingSenderId: "942481462459",
  appId: "1:942481462459:web:5e42b3e0803ea77cfac59e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {auth, db};