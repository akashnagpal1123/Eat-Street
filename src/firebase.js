// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNDKvZmTINdze75OgSSZAwRyxs30yZRaE",
  authDomain: "eat-street-app-3e785.firebaseapp.com",
  projectId: "eat-street-app-3e785",
  storageBucket: "eat-street-app-3e785.appspot.com",
  messagingSenderId: "673557302575",
  appId: "1:673557302575:web:8e652fd11d8a8cab42a5da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// export default app;