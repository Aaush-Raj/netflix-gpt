// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4rNKWVMsT949F6riw44U9yQ6aYrinqtY",
  authDomain: "netflix-gpt-aaush.firebaseapp.com",
  projectId: "netflix-gpt-aaush",
  storageBucket: "netflix-gpt-aaush.appspot.com",
  messagingSenderId: "945853734718",
  appId: "1:945853734718:web:80afb62c7f95cc9e3f966f",
  measurementId: "G-B6KLVWVGRY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth = getAuth();
