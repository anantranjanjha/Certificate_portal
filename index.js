const myElement = document.getElementById("sighUp");
const logElement = document.getElementById("log_submit");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import {
    getDatabase,
    set,
    ref,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXCRxje1j_KnmoyQmTBPY4G6LlcEQegLo",
    authDomain: "certi-details.firebaseapp.com",
    databaseURL:
        "https://certi-details-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "certi-details",
    storageBucket: "certi-details.appspot.com",
    messagingSenderId: "568052628441",
    appId: "1:568052628441:web:ecddece7b9023384b137c8",
    measurementId: "G-RF54MFXYHT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();



myElement.addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let cnfpassword = document.getElementById("cnfpass").value;

    if (password === cnfpassword) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert("Verification link Sent");
                    });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`${errorMessage}`);
                // ..
            });
    } else {
        alert("Check Password And Confirm Password");
    }
});

logElement.addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.getElementById("log_email").value;
    let password = document.getElementById("log_pass").value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified) {
                console.log("Logged in");
                window.location.href = "certifcate.html";
            }
            else {
                alert('Please Verify Email');
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
