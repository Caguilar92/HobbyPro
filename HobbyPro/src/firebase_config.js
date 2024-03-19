// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZHHgzBsvnpHA5Vd8Ak8dgMm764e8DS_o",
    authDomain: "hobbypro-7fa90.firebaseapp.com",
    projectId: "hobbypro-7fa90",
    storageBucket: "hobbypro-7fa90.appspot.com",
    messagingSenderId: "712636777336",
    appId: "1:712636777336:web:3aab6ea364039d003fbe8d",
    measurementId: "G-CL61H6M0JN",
    databaseURL: "https://hobbypro-7fa90-default-rtdb.firebaseio.com"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const  auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);


export {firebaseApp,analytics,auth,database,firestore}
