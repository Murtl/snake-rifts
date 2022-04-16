// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    firebase_dev: {
        apiKey: "AIzaSyA82qyQ-ohkc9TbKeuF70nyZ5IYrQ7G9dw",
        authDomain: "snakerifts.firebaseapp.com",
        projectId: "snakerifts",
        storageBucket: "snakerifts.appspot.com",
        messagingSenderId: "718008622273",
        appId: "1:718008622273:web:79ad2adc73d6555bc64840",
        measurementId: "G-ZY96WJ5GKZ"
    }
};

// Initialize Firebase
const app = initializeApp(config.firebase_dev)
export const db = getFirestore(app)

export function getCurrentUser() {
    return getAuth().currentUser
}
