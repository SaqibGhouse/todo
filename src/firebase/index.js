// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANpnm7tar8TufJa-MzAFXnxBdBjPktPyc",
  authDomain: "todo-app-a973e.firebaseapp.com",
  projectId: "todo-app-a973e",
  storageBucket: "todo-app-a973e.appspot.com",
  messagingSenderId: "523208017136",
  appId: "1:523208017136:web:d947f292051f61cbd0ae35",
  measurementId: "G-4Z3ZC2GXCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
