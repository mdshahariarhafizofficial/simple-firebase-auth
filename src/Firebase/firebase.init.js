// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9rJjET60S5gsr33tGXR6ffrlNxfUpVsw",
  authDomain: "simple-firebase-auth-16494.firebaseapp.com",
  projectId: "simple-firebase-auth-16494",
  storageBucket: "simple-firebase-auth-16494.firebasestorage.app",
  messagingSenderId: "90108043200",
  appId: "1:90108043200:web:5a45e81c776e4a9a837225"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);