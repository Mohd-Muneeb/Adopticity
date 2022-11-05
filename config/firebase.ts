// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuXaYJBinjaGlgRSPA1AbpqasDwY9b-Z8",
    authDomain: "adopticity.firebaseapp.com",
    projectId: "adopticity",
    storageBucket: "adopticity.appspot.com",
    messagingSenderId: "1044811605647",
    appId: "1:1044811605647:web:444925674f428763cbf2fa",
    measurementId: "G-6NB905ZXKD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
