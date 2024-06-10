import { initializeApp } from "firebase/app";
import { Database } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCa3ngHxkJb3N5Dq6nYzOcs6rn2YlBTOFg",
    authDomain: "bhati-s-e-commerce.firebaseapp.com",
    projectId: "bhati-s-e-commerce",
    storageBucket: "bhati-s-e-commerce.appspot.com",
    messagingSenderId: "667963115204",
    appId: "1:667963115204:web:ae66912362a69f6bc0ab91",
    measurementId: "G-MJ5P3PH51X",
    DatabaseURL:"https://bhati-s-e-commerce-default-rtdb.firebaseio.com/"
};
const app = initializeApp(firebaseConfig);