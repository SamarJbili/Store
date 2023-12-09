import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCGXsgUUFkM7O8IxypUJnAvMNbqalEoTPk",
    authDomain: "store-457b8.firebaseapp.com",
    projectId: "store-457b8",
    storageBucket: "store-457b8.appspot.com",
    messagingSenderId: "1057652945641",
    appId: "1:1057652945641:web:c4d669dbb5af3e8357b678"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
