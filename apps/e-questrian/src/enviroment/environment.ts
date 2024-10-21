// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApvinOw51DNERSyIQEoyWULo_Aex-h1Wg",
  authDomain: "e-questrian-5f4a6.firebaseapp.com",
  projectId: "e-questrian-5f4a6",
  storageBucket: "e-questrian-5f4a6.appspot.com",
  messagingSenderId: "21186846099",
  appId: "1:21186846099:web:1b677d69204eeb2e49dc66",
  measurementId: "G-SHRW2LQQSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);