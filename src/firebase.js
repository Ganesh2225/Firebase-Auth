import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmwZ5nKyjUp-9Z35hWSY9z07NBCE8IivE",
  authDomain: "react-authentication-4d759.firebaseapp.com",
  projectId: "react-authentication-4d759",
  storageBucket: "react-authentication-4d759.appspot.com",
  messagingSenderId: "846648044661",
  appId: "1:846648044661:web:e6912e955840547d259c3c",
  measurementId: "G-9NR1K3F6BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
//const analytics = getAnalytics(app);
export default app;