import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwXhDZsSdu3Ls2UcnwssSHrfjvaCeU8_s",
  authDomain: "house-of-fitness-classes.firebaseapp.com",
  databaseURL: "https://house-of-fitness-classes-default-rtdb.firebaseio.com",
  projectId: "house-of-fitness-classes",
  storageBucket: "house-of-fitness-classes.appspot.com",
  messagingSenderId: "868182869541",
  appId: "1:868182869541:web:9f458be71f6db2cbf1e1cc",
  measurementId: "G-GYP0W351RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

//Login Portal

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var TZC0gXOs0oQ = document.getElementById('username').value;
    var XvyDvKTpNA = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, TZC0gXOs0oQ, XvyDvKTpNA)
    .then(function(userCredential) {
        window.location.href = 'lobbyAdmin.html';
    })
})
/*
login.addEventListener('click', (e) => {
    var TZC0gXOs0oQ = document.getElementById('username').value;
    var XvyDvKTpNA = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, TZC0gXOs0oQ, XvyDvKTpNA)
    .then((userCredential) => {
        const user = userCredential
        console.log(user)
        window.location.href = "lobbyAdmin.html";
    })
})
*/
