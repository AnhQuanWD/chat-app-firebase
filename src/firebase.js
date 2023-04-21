// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQjYHfx-OUEZp5HVGw5u72RbruTNUs0Rg",
  authDomain: "chat-app-6d72f.firebaseapp.com",
  projectId: "chat-app-6d72f",
  storageBucket: "chat-app-6d72f.appspot.com",
  messagingSenderId: "416488043785",
  appId: "1:416488043785:web:41e16a0f7adf694bc2cfd8",
  measurementId: "G-7JS3Z35VY8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
