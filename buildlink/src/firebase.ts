import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDILP-wEhiG-x0gXHGIVmNTrO4ky-p5_lc", 
  authDomain: "buildlink-eef9f.firebaseapp.com",
  projectId: "buildlink-eef9f",
  storageBucket: "buildlink-eef9f.firebasestorage.app",
  messagingSenderId: "569502905877",
  appId: "1:569502905877:web:757da917452d3a391efb05"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);