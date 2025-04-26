// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtLKbs_dMIfclK50rmAOVdLkONhArlaaI",
  authDomain: "simple-firebase-auth-472eb.firebaseapp.com",
  projectId: "simple-firebase-auth-472eb",
  storageBucket: "simple-firebase-auth-472eb.firebasestorage.app",
  messagingSenderId: "154686733869",
  appId: "1:154686733869:web:590d13137fb7824aa942a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);