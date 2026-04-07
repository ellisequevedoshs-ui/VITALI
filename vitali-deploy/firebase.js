// const firebaseConfig = {

// apiKey: "AIzaSyCbZk0wgofX4PMusy7DFsy8RKpxnx5FcGY",

// authDomain: "vitali-17a9e.firebaseapp.com",

// projectId: "vitali-17a9e",

// storageBucket: "vitali-17a9e.firebasestorage.app",

// messagingSenderId: "41512254831",

// appId: "1:41512254831:web:9edb65a58e09646bd4bc9a",

// };

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIEk5MXcmWXM7gaFu0JSo8gBAlj6s0ELk",
  authDomain: "vitali-17a9e.firebaseapp.com",
  projectId: "vitali-17a9e",
  storageBucket: "vitali-17a9e.firebasestorage.app",
  messagingSenderId: "249547404250",
  appId: "1:249547404250:web:9317bc3bd0a6a1b9c906e3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
