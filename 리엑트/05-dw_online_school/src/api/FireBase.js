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
  where,
  exists,
  arrayUnion,
  arrayRemove,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiTeBI45QPpFC95pF-kc5u2PWQQT1Oyzc",
  authDomain: "dwos-6a827.firebaseapp.com",
  projectId: "dwos-6a827",
  storageBucket: "dwos-6a827.appspot.com",
  messagingSenderId: "703497457004",
  appId: "1:703497457004:web:a29a731777a608ffc9f749",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName, options) {
  // throw new Error("에러가 아니고 기능입니다.")
  // const querySnapahot = await getDocs(collection(db, collectionName));
  let docQuery;
  if (options === undefined) {
    const querySnapahot = await getDocs(collection(db, collectionName));
    const result = querySnapahot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }));
    return result;
  } else if (options.lq === undefined) {
    docQuery = query(
      // asc 오름차순(생략가능) desc 내림차순
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      limit(options.limit)
    );
  } else {
    docQuery = query(
      // asc 오름차순(생략가능) desc 내림차순
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      startAfter(options.lq),
      limit(options.limit)
    );
  }
  const querySnapahot = await getDocs(docQuery);

  // 쿼리 query
  // orderBy, limit, startAfter
  const result = querySnapahot.docs;
  // console.log(result)
  const lastQuery = result[result.length - 1];
  // console.log(lastQuery)

  // const reviews = result.map((doc) => ({docID : doc.id, ...doc.data()}));
  const reviews = result.map((doc) => {
    const obj = doc.data();
    obj.docId = doc.id;
    return obj;
  });

  return { reviews, lastQuery };
}
async function getData(collectionName, fieldName, condition, value) {
  const docQuery = query(
    collection(db, collectionName),
    where(fieldName, condition, value)
  );

  const querySnapshot = await getDocs(docQuery);
  const data = querySnapshot.docs.map((doc) => ({
    docId: doc.id,
    ...doc.data(),
  }));

  return data.length === 1 ? data[0] : data;
}

async function getMember(values) {
  const { id, password } = values;
  let message;
  let memberObj = {};

  const docQuery = query(collection(db, "member"), where("id", "==", id));
  const querySnapshot = await getDocs(docQuery);
  if (querySnapshot.docs.length !== 0) {
    const memberData = querySnapshot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }))[0];
    if (memberData.password == password) {
      memberObj = memberData;
    } else {
      message = "비밀번호가 일치하지 않습니다.";
    }
  } else {
    message = "일치하는 아이디가 없습니다.";
  }

  return { memberObj, message };
}

async function addDatas(collectionName, formData) {
  // formData 에서 imgurl 에 있는 File 객체를 꺼내서 스토리지에 저장

  // uuid = 128자로 구성
  // crypto =  자바스크립트 내장함수
  const uuid = crypto.randomUUID();
  const path = `movie/${uuid}`;
  // 문서의 마지막 id를 가져온다
  const lastId = (await getLastId(collectionName)) + 1;
  // 문서의 생성일을 만든다
  // getTime Date 에서 나온 날짜를 숫자 ms 로 표현한다
  const time = new Date().getTime();
  // File을 저장하고 url 을 받아 온다
  const url = await uploadImage(path, formData.imgUrl);

  // formData에 넣어준다.
  formData.id = lastId;
  formData.createdAt = time;
  formData.updatedAt = time;
  formData.imgUrl = url;
  // formData.imgUrl = 받아온 url

  // 문서ID 자동
  // addDoc 문서ID를 리턴해준다
  const result = await addDoc(collection(db, collectionName), formData);
  // console.log(result);
  // const docSnap = await getDoc(collection(db,collectionName, "문서ID"))
  const docSnap = await getDoc(result);
  if (docSnap.exists()) {
    // exists 파이어 배이스 함수
    const review = { docid: docSnap.id, ...docSnap.data() };
    return { review };
  }
}

async function updateDatas(collectionName, docId, updateData, options) {
  const docRef = doc(db, collectionName, docId);
  try {
    if (options) {
      if (options.type == "ADD") {
        await updateDoc(docRef, {
          [options.fieldName]: arrayUnion(updateData),
        });
      } else if (options.type == "DELETE") {
        await updateDoc(docRef, {
          [options.fieldName]: arrayRemove(updateData),
        });
      }
    } else {
      await updateDoc(docRef, updateData);
    }
    return true
  } catch (error) {
    return false
  }
}

async function deleteDatas(collectionName, docID, imgUrl) {
  // firebase에 있는 스토리지 삭제 하는 방법
  const storage = getStorage();

  // deleteObject  스토리지 내장함수
  try {
    const deleteRef = ref(storage, imgUrl);
    await deleteObject(deleteRef);
    await deleteDoc(doc(db, collectionName, docID));
  } catch (error) {
    return false;
  }
  return true;
}

async function uploadImage(path, imgFile) {
  const storage = getStorage();

  // const imageRef = ref(storage, "movie/FileName");
  const imageRef = ref(storage, path);

  // File 객체를 꺼내서 스토리지에 저장
  // await uploadBytes(imageRef, 저장할 file 객체)
  await uploadBytes(imageRef, imgFile);

  // 저장한 File 의 url 을 받아 온다
  const url = await getDownloadURL(imageRef);
  return url;
}

// 문서의 마지막 id를 가져온다
async function getLastId(collectionName) {
  const docQuery = query(
    // asc 오름차순(생략가능) desc 내림차순
    collection(db, collectionName),
    orderBy("id", "desc"),
    limit(1)
  );
  const lastDoc = await getDocs(docQuery);
  const lastId = lastDoc.docs[0].data().id;
  return lastId;
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  // setDoc 문서 아이디 입력 가능
  setDoc,
  // addDoc 문서 아이디 자동
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  addDatas,
  deleteDatas,
  updateDatas,
  getMember,
  getData,
};
