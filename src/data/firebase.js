// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRSViPoWPB3xImK1Z1bJr-J8hfeJ5-sng",
  authDomain: "cij-colima.firebaseapp.com",
  projectId: "cij-colima",
  storageBucket: "cij-colima.appspot.com",
  messagingSenderId: "1021987860587",
  appId: "1:1021987860587:web:7d2fe0a02af4b868b5412e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;