// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  apiKey, 
  authDomain,
  databaseURL, 
  projectId, 
  storageBucket, 
  messagingSenderId, 
  appId, 
  measurementId
} from "../config.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey, 
  authDomain,
  databaseURL, 
  projectId, 
  storageBucket, 
  messagingSenderId, 
  appId, 
  measurementId
};

// console.log({config})
// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;