// Firebase SDK modüllerini import et
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

// Firebase yapılandırma bilgilerini buraya yapıştırın
const firebaseConfig = {
    apiKey: "AIzaSyD5enMh_w0koTTa6jMlh_fnu9SoVl6XEbM",
    authDomain: "newportfolio-39f6e.firebaseapp.com",
    projectId: "newportfolio-39f6e",
    storageBucket: "newportfolio-39f6e.appspot.com",
    messagingSenderId: "717081063319",
    appId: "1:717081063319:web:bb3424d9e0b1480e395ed2",
    measurementId: "G-LEKJ3FN57W"
};

// Firebase’i başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, addDoc, app, getDocs };
