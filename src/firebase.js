// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv19WSgu_F6EP7s3M3AMDWNIngnMZa5HE",
  authDomain: "orderingapp-bb321.firebaseapp.com",
  projectId: "orderingapp-bb321",
  storageBucket: "orderingapp-bb321.appspot.com",
  messagingSenderId: "386718269494",
  appId: "1:386718269494:web:552c4a1559310931381897"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app