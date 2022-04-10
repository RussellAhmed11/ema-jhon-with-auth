// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjP5bJLXz3rfinhLN9f71sEcRAOefrwHc",
  authDomain: "ema-jhon-simple-a60e4.firebaseapp.com",
  projectId: "ema-jhon-simple-a60e4",
  storageBucket: "ema-jhon-simple-a60e4.appspot.com",
  messagingSenderId: "920583757551",
  appId: "1:920583757551:web:f0f6702a7a3c23ec4a451a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;