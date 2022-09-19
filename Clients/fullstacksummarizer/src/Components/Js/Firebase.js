import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC4FS5LzIkJIw8yaf_E4U1_WaOwX8sCuCk",
    authDomain: "summify-b5ea6.firebaseapp.com",
    projectId: "summify-b5ea6",
    storageBucket: "summify-b5ea6.appspot.com",
    messagingSenderId: "805633869557",
    appId: "1:805633869557:web:67ada459bdf205c887a7bc",
    measurementId: "G-S118TG1M27"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp)
const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();




export {auth,googleProvider};
export default database;