/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXke3Ts7keje65PyYTh2sLFOQ8MevH0vo",
  authDomain: "barberscheduler-f33cf.firebaseapp.com",
  projectId: "barberscheduler-f33cf",
  storageBucket: "barberscheduler-f33cf.appspot.com",
  messagingSenderId: "868283078956",
  appId: "1:868283078956:web:8362d32f24320424247489",
  measurementId: "G-B8PYEK6WVK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
