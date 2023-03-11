import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnATcQK51x0kMlyBlS8D4hmthTR6lpWv8",
  authDomain: "ecommerce-reactcoder-noir.firebaseapp.com",
  projectId: "ecommerce-reactcoder-noir",
  storageBucket: "ecommerce-reactcoder-noir.appspot.com",
  messagingSenderId: "607624811315",
  appId: "1:607624811315:web:e0cd11a8c4836894c9e446"
};

// Initialize Firebase
initializeApp(firebaseConfig);
/* const app = initializeApp(firebaseConfig); */

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
