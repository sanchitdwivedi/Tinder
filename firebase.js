// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzb1i2ArsgtcyxxuAw4mhTbR5QC0anVZg",
  authDomain: "tinder-2-fab04.firebaseapp.com",
  projectId: "tinder-2-fab04",
  storageBucket: "tinder-2-fab04.appspot.com",
  messagingSenderId: "40028622441",
  appId: "1:40028622441:web:d15e6025feb46ed71a1cf8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFireStore;

export { auth, db };
