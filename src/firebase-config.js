import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyChMy6qZf-GxMWmRRrbLKhXNHq3eYK-lNc",
  authDomain: "chat-react-firebase-dsi02.firebaseapp.com",
  projectId: "chat-react-firebase-dsi02",
  storageBucket: "chat-react-firebase-dsi02.appspot.com",
  messagingSenderId: "273034487281",
  appId: "1:273034487281:web:e445e125bc07db6fd61050",
  measurementId: "G-HKSC905W5D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
