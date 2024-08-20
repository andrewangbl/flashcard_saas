// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMj51fOEuc5JV-OLwPdvlu7Nl0uYfGnvU",
  authDomain: "flashcard-saas-bad5b.firebaseapp.com",
  projectId: "flashcard-saas-bad5b",
  storageBucket: "flashcard-saas-bad5b.appspot.com",
  messagingSenderId: "166574697309",
  appId: "1:166574697309:web:eb9fa224d19c160fbd96b4",
  measurementId: "G-VMVYL70VR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics only if supported
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, analytics };
