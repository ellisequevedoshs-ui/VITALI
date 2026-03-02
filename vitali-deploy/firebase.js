import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {

apiKey: "AIzaSyCbZk0wgofX4PMusy7DFsy8RKpxnx5FcGY",

authDomain: "vitali-17a9e.firebaseapp.com",

projectId: "vitali-17a9e",

storageBucket: "vitali-17a9e.firebasestorage.app",

messagingSenderId: "41512254831",

appId: "1:41512254831:web:9edb65a58e09646bd4bc9a",

};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export { auth, db };