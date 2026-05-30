// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDILP-wEhiG-x0gXHGIVmNTrO4ky-p5_lc",
  authDomain: "buildlink-eef9f.firebaseapp.com",
  projectId: "buildlink-eef9f",
  storageBucket: "buildlink-eef9f.firebasestorage.app",
  messagingSenderId: "467944161209",
  appId: "1:467944161209:web:4601b21fe82da3889ec068",
  measurementId: "G-F1Z1VFQ65Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);