// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5enMh_w0koTTa6jMlh_fnu9SoVl6XEbM",
    authDomain: "newportfolio-39f6e.firebaseapp.com",
    projectId: "newportfolio-39f6e",
    storageBucket: "newportfolio-39f6e.appspot.com",
    messagingSenderId: "717081063319",
    appId: "1:717081063319:web:bb3424d9e0b1480e395ed2",
    measurementId: "G-LEKJ3FN57W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);