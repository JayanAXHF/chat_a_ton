// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ErQcH2vf6SBRKkOmu7GRrxRGkhD1Wuc",
  authDomain: "chat-a-ton.firebaseapp.com",
  databaseURL:
    "https://chat-a-ton-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-a-ton",
  storageBucket: "chat-a-ton.appspot.com",
  messagingSenderId: "1082462401785",
  appId: "1:1082462401785:web:f40c16f305832ee02d1e28",
  measurementId: "G-GLS10B47P8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
const auth = getAuth(app);
