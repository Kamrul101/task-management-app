// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk0eDxhUyipXrlL65nruDXBquS-DokQlI",
  authDomain: "task-management-app-7bc56.firebaseapp.com",
  projectId: "task-management-app-7bc56",
  storageBucket: "task-management-app-7bc56.appspot.com",
  messagingSenderId: "961741388114",
  appId: "1:961741388114:web:4558257764c47b339a228b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;