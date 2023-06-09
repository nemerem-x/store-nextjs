// NOT IN USE
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "store-c6d5f.firebaseapp.com",
  projectId: "store-c6d5f",
  storageBucket: "store-c6d5f.appspot.com",
  messagingSenderId: "191612384627",
  appId: "1:191612384627:web:a19f6cd638d7bc65434106",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
