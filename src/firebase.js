import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe13hE3feWmM55gXv7fiumnW8Ohx_9vbk",
  authDomain: "cryptoloans-82f2d.firebaseapp.com",
  projectId: "cryptoloans-82f2d",
  storageBucket: "cryptoloans-82f2d.appspot.com",
  messagingSenderId: "771401352197",
  appId: "1:771401352197:web:030444f40d2ff88d5a886c",
  measurementId: "G-D0J5J2GH0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = app.auth()
export default app
