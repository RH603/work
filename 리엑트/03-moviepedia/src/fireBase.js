// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyC0MlcthiaVwP4d9A5oLre4FVmYBz7XvxM",
  authDomain: "project0304-f804c.firebaseapp.com",
  projectId: "project0304-f804c",
  storageBucket: "project0304-f804c.appspot.com",
  messagingSenderId: "633642156974",
  appId: "1:633642156974:web:7f4cf62917bffe96fe3e3f",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapahot = await getDocs(collection(db, collectionName));
  const result = querySnapahot.docs;
  const reviews = result.map((doc) => doc.data());
  return {reviews};
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
};
