
import { getFirestore, collection, addDoc, getDoc, getDocs, updateDoc, doc    } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import firebaseApp from "./firebase-setup.js";

import { throwError } from "../helper/share.js";

const db =  getFirestore(firebaseApp);

export const get = async(
  collectionName = throwError(`get/collectionName`) 
) => {
  const cols = collection(db, collectionName);
  const snapshot = await getDocs(cols);
  const list = snapshot.docs.map(doc => doc.data());
  return list;
}

export const getById = async(
  collectionName = throwError(`getById/collectionName`),
  key = throwError(`getById/key`), 
) => {

  const ref = doc(db, `${collectionName}/${key}`);
  const snapshot = await getDoc(ref);
  // console.log({ref, snapshot})
  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

export const save =  async (
  collectionName = throwError(`save/collectionName`),
  data = {}, 
) => {
  
  const docRef = await addDoc(collection(db, collectionName), data);
  // console.log("Document written with ID: ", docRef.id);
  return docRef;
  // return docRef.id
}

export const update = async(
  collectionName = throwError(`update/collectionName`), 
  key = throwError(`update/key`), 
  data
) => {

  const dbRef = doc(db, collectionName, key);

  const result = await updateDoc(dbRef, data);
  // console.log("update : ", {collectionName,  key, data, result})

  return result;
}

export const upsert = async(
  collectionName = throwError(`upsert/collectionName`), 
  key = throwError(`upsert/key`), 
  data = {}
) => {
  const dbRef = doc(db, collectionName, key);
  const result = await setDoc(dbRef, data, { merge: true })

  // console.log("upsert : ", {collectionName,  key, data, result})

  return result;
}