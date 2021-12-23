// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIT6CePdMPMiujGjijtcAusTJXiGCh6iI",
  authDomain: "gem-portfolio-blog.firebaseapp.com",
  databaseURL: "https://gem-portfolio-blog-default-rtdb.firebaseio.com",
  projectId: "gem-portfolio-blog",
  storageBucket: "gem-portfolio-blog.appspot.com",
  messagingSenderId: "472060467198",
  appId: "1:472060467198:web:dc117dae7aa4f2b8f992af",
  measurementId: "G-J9FES06J01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore();

// export { firestore };
export { app };
