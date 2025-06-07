import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNR5Y2tprs6wR1fYzzFYEksymKTCxs_Ig",
  authDomain: "websitedb-4ffa8.firebaseapp.com",
  projectId: "websitedb-4ffa8",
  storageBucket: "websitedb-4ffa8.firebasestorage.app",
  messagingSenderId: "283795392137",
  appId: "1:283795392137:web:ec442468039e7bf3c56858"
};

const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };