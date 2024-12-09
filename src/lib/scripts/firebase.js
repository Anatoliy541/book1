import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjtbj3MGXJTDQGDKOmIKHyy4QqG47a-ts",
  authDomain: "book1-85bc9.firebaseapp.com",
  projectId: "book1-85bc9",
  storageBucket: "book1-85bc9.firebasestorage.app",
  messagingSenderId: "105957084754",
  appId: "1:105957084754:web:2b27c902b6c638b1a0998b",
  databaseURL:"https://book1-85bc9-default-rtdb.firebaseio.com/"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);