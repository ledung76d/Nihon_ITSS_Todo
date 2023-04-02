// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5o3gLbkeymA-mb9P59abeWXaoulNIfDY",
    authDomain: "itss-todo-80122.firebaseapp.com",
    projectId: "itss-todo-80122",
    storageBucket: "itss-todo-80122.appspot.com",
    messagingSenderId: "40624637175",
    appId: "1:40624637175:web:8187752daca56394273ff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);