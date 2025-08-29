// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlqafS2IcxIg-ZH-4HATZxj_puU2MPYjY",
  authDomain: "subshield-32f78.firebaseapp.com",
  projectId: "subshield-32f78",
  storageBucket: "subshield-32f78.firebasestorage.app",
  messagingSenderId: "46819263454",
  appId: "1:46819263454:web:95cd2c75ff01edaa9f534f",
  measurementId: "G-0K29HWTQ3Y"
};

// Initialize Firebase
export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);