const logout = document.getElementById('logout');

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import {
    getAuth,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log('logged in');
        // ...
    } else {
        window.location.replace("login.html");
    }
});

logout.addEventListener('click', (e) => {
    signOut(auth);
})
