// import firebase from "firebase"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
// import { initializeApp } from "firebase/app";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA6IJZidJrvtIOca0wm6SDaKRF-qB-rthU",
    authDomain: "fbclone23-4ff0c.firebaseapp.com",
    projectId: "fbclone23-4ff0c",
    storageBucket: "fbclone23-4ff0c.appspot.com",
    messagingSenderId: "636218266539",
    appId: "1:636218266539:web:f2504f14b12e799d64b8ee"
  });

   const auth = firebase.auth();
 const provider = new firebase.auth.FacebookAuthProvider();

  export {auth, provider} 