// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "realestate-79290.firebaseapp.com",
    projectId: "realestate-79290",
    storageBucket: "realestate-79290.appspot.com",
    messagingSenderId: "937276092123",
    appId: "1:937276092123:web:c4641b4b4418c51c2326fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);