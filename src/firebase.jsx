
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASek0s0V-h-to3mSr75w4pwkCXEdPF8bk",
  authDomain: "flixpix-4e214.firebaseapp.com",
  projectId: "flixpix-4e214",
  storageBucket: "flixpix-4e214.appspot.com",
  messagingSenderId: "870075872472",
  appId: "1:870075872472:web:12f01ce8ee50650d71d3ad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

