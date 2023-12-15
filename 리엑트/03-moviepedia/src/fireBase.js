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
  query,
  orderBy,
  limit,
  startAfter, 
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

async function getDatas(collectionName,order, limitNum, lq) {
  // const querySnapahot = await getDocs(collection(db, collectionName));
  let docQuery;
  if(lq === undefined){
     docQuery = query(
      // asc 오름차순(생략가능) desc 내림차순
      collection(db, collectionName),
      orderBy(order, "desc"),
      limit(limitNum)
      );
  }else{
     docQuery = query(
      // asc 오름차순(생략가능) desc 내림차순
      collection(db, collectionName),
      orderBy(order, "desc"),
      startAfter(lq),
      limit(limitNum)
      );
  }
    const querySnapahot = await getDocs(docQuery);
    
  // 쿼리 query
  // orderBy, limit, startAfter
  const result = querySnapahot.docs;
  // console.log(result)
  const lastQuery = result[result.length -1]
  // console.log(lastQuery)
  const reviews = result.map((doc) => doc.data());
  return { reviews, lastQuery };
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
};
