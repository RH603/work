 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
 import {
   getFirestore,
   collection,
   getDocs,
   setDoc,
   addDoc,
   doc,

 } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
 const firebaseConfig = {
   apiKey: "AIzaSyAOp5onwE0nJ8oSTlI59bwFWGoDXooTyj8",
   authDomain: "test-8791d.firebaseapp.com",
   projectId: "test-8791d",
   storageBucket: "test-8791d.appspot.com",
   messagingSenderId: "193392046761",
   appId: "1:193392046761:web:bd57889b8ee3cf4de7afb8",
   measurementId: "G-L8MQPH4WW1"
 };
     // Initialize Firebase
     const app = initializeApp(firebaseConfig);
     const analytics = getAnalytics(app);
     const db = getFirestore(app);

     async function getDatas(collectionName){
        const querySnapahot = await getDocs(collection(db,collectionName));
        return querySnapahot;
      }
      async function addDatas(collectionName, dataObj) {
        // 문서ID 부여
        //   await setDoc(doc(db, "member", "member1"), dataObj);
      
        // 문서ID 자동
        await addDoc(collection(db, collectionName), dataObj);
      }

 export {db, getDocs, collection, getDatas, setDoc, addDoc,doc,addDatas};

 

 