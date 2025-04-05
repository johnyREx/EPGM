// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYfnhbFe0C1R5oF-aefw5OlxB6T6W6JRc",
  authDomain: "epgm-bpam.firebaseapp.com",
  projectId: "epgm-bpam",
  storageBucket: "epgm-bpam.firebasestorage.app",
  messagingSenderId: "300755595389",
  appId: "1:300755595389:web:5099f21d55d4a61dd00114",
  measurementId: "G-D8T1ZCCT57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);