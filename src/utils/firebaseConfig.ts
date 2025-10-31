// src/utils/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNiu0bKhY8yfOfhTTHmVMvY-Qo1WpT4NY",
  authDomain: "my-portfolio-49a47.firebaseapp.com",
  projectId: "my-portfolio-49a47",
  storageBucket: "my-portfolio-49a47.firebasestorage.app",
  messagingSenderId: "471626162582",
  appId: "1:471626162582:web:854ba9e8ef91d2426bbdb7",
  measurementId: "G-F9V6075Z3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth
export const auth = getAuth(app);
