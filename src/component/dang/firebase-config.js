// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8oqbOoqIARM8oROjSsQPivoKu2pUxZOE",
  authDomain: "fir-tutorial-41a63.firebaseapp.com",
  projectId: "fir-tutorial-41a63",
  storageBucket: "fir-tutorial-41a63.appspot.com",
  messagingSenderId: "1074658479051",
  appId: "1:1074658479051:web:cf8f892298e97ef2fb044e",
  measurementId: "G-VJRMVSF9VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);