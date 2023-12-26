// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estatespark-c0536.firebaseapp.com",
  projectId: "estatespark-c0536",
  storageBucket: "estatespark-c0536.appspot.com",
  messagingSenderId: "960214799783",
  appId: "1:960214799783:web:7b3b51684bbbc1fada9282"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);