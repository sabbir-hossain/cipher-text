// Import the functions you need from the SDKs you need
// import * as firebase from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

import { throwError } from "../helper/share.js";
import config from "../../config.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: config?.apiKey || throwError("config?.apiKey"), 
  authDomain: config?.authDomain || throwError("config?.apiKey"),
  databaseURL: config?.databaseURL|| throwError("config?.apiKey"), 
  projectId: config?.projectId || throwError("config?.apiKey"), 
  storageBucket: config?.storageBucket || throwError("config?.apiKey"), 
  messagingSenderId: config?.messagingSenderId || throwError("config?.apiKey"), 
  appId: config?.appId || throwError("config?.apiKey"), 
  measurementId: config?.measurementId || throwError("config?.apiKey")
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseApp;
