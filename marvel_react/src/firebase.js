import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIRQAI46_13-W6eat5fPfDYo3to4I2zEg",
    authDomain: "marvel-dev-b223c.firebaseapp.com",
    projectId: "marvel-dev-b223c",
    storageBucket: "marvel-dev-b223c.appspot.com",
    messagingSenderId: "809603095034",
    appId: "1:809603095034:web:4d533cc13e4d3205826c43"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);