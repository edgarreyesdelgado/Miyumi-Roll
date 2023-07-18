
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_PASSWORD,
  authDomain: import.meta.env.VITE_DOMAIN,
  projectId: "sushi-app-1b21b",
  storageBucket: "sushi-app-1b21b.appspot.com",
  messagingSenderId: "332127220162",
  appId: "1:332127220162:web:b4dacb555ac69f6f97265b",
  measurementId: "G-7ESEB12HK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db}