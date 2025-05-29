// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCq8Q7Z-Gf88aWU7TUV0Ji1ulgSFq6eKDI",
  authDomain: "testcrud-e8acb.firebaseapp.com",
  databaseURL: "https://testcrud-e8acb-default-rtdb.firebaseio.com",
  projectId: "testcrud-e8acb",
  storageBucket: "testcrud-e8acb.firebasestorage.app",
  messagingSenderId: "722936421487",
  appId: "1:722936421487:web:b213e03c6585adc5c7819a"
};z

const app = initializeApp(firebaseConfig)

export default app