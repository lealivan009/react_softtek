// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvS2pZk2Xb5l_SPbB0qWUlQkMdfiV4EUc",
    authDomain: "escuelita-ionic.firebaseapp.com",
    projectId: "escuelita-ionic",
    storageBucket: "escuelita-ionic.appspot.com",
    messagingSenderId: "964732448309",
    appId: "1:964732448309:web:8074a52e8dfd7f02050b7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };

