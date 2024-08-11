// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const process = import.meta.env;
console.log(process.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
    apiKey: process.VITE_FIREBASE_API_KEY,
    authDomain: "moviez-gpt.firebaseapp.com",
    projectId: "moviez-gpt",
    storageBucket: "moviez-gpt.appspot.com",
    messagingSenderId: "830346962111",
    appId: process.VITE_FIREBASE_API_ID,
    measurementId: "G-T9SCKK16R1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics, "an")
export const auth = getAuth(app);
const user = auth.currentUser?.providerData;
console.log(user, "current user")