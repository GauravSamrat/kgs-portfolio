import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import other services as needed, e.g., getFirestore, getAuth

// Your web app's Firebase configuration
// You get these values from the Firebase Console -> Project Settings
const firebaseConfig = {
  apiKey: "AIzaSyA_RybcV27mim42elzKuAUB08eCjGd-KkU",
  authDomain: "kgauravsamrat.firebaseapp.com",
  projectId: "kgauravsamrat",
  storageBucket: "kgauravsamrat.firebasestorage.app",
  messagingSenderId: "302428992012",
  appId: "1:302428992012:web:cf2e2ba7e3021878427429",
  measurementId: "G-5VVS10HTYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export instances to use throughout your app
export { app, analytics };