// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCK0QwPQdlD5m4pnJurrITTvhXVznvsAHY',
  authDomain: 'application-meteo-40e93.firebaseapp.com',
  projectId: 'application-meteo-40e93',
  storageBucket: 'application-meteo-40e93.appspot.com',
  messagingSenderId: '662272561764',
  appId: '1:662272561764:web:aa99d0f948a4db30e24571',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const btnLogging = document.getElementById('btn-logging');
btnLogging.addEventListener('click', function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log('hello');
      window.location.href = 'indexMeteo.html';
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
