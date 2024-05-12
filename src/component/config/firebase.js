import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZ32A9DSWhaij08hh--Ylo5k0HwzR69HM",
  authDomain: "advweb2-f072e.firebaseapp.com",
  projectId: "advweb2-f072e",
  storageBucket: "advweb2-f072e.appspot.com",
  messagingSenderId: "708184207838",
  appId: "1:708184207838:web:072d900ed2644d268a2d4f",
  measurementId: "G-93FTTLX8G7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fs = getFirestore(app);
const storage = getStorage(app);

export {auth, fs, storage};