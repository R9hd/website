import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCNR5Y2tprs6wR1fYzzFYEksymKTCxs_Ig",
  authDomain: "websitedb-4ffa8.firebaseapp.com",
  projectId: "websitedb-4ffa8",
  storageBucket: "websitedb-4ffa8.firebasestorage.app",
  messagingSenderId: "283795392137",
  appId: "1:283795392137:web:ec442468039e7bf3c56858"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };