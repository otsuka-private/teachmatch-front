// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMQISYwk5QaNfAV4oYZLLz9aKFPfsA1HE",
    authDomain: "teachmatchcollab.firebaseapp.com",
    projectId: "teachmatchcollab",
    storageBucket: "teachmatchcollab.appspot.com",
    messagingSenderId: "59352271649",
    appId: "1:59352271649:web:bba6319de0ab9c11a04c60"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();