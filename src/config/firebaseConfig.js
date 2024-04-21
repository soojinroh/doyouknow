// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrNVIgXQc0tjQa7feWhGpYftvhaWHqRxE",
  authDomain: "doyouknow-3e8b1.firebaseapp.com",
  projectId: "doyouknow-3e8b1",
  storageBucket: "doyouknow-3e8b1.appspot.com",
  messagingSenderId: "837220520",
  appId: "1:837220520:web:90271f9bb9b7bf41152a9d",
  measurementId: "G-2TWW222JNJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

export { db };