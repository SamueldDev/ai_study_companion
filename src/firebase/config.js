



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "study-ai-companion.firebaseapp.com",
  projectId: "study-ai-companion",
  storageBucket: "study-ai-companion.firebasestorage.app",
  messagingSenderId: "533477651709",
  appId: "1:533477651709:web:41155111d14f29e6043a94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}