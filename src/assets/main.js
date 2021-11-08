import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCsrM19ErYQNlkZew57E1YLpUDtNBSuZt8",
  authDomain: "innovations-t4.firebaseapp.com",
  projectId: "innovations-t4",
  databaseURL: "https://innovations-t4-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "innovations-t4.appspot.com",
  messagingSenderId: "802797575693",
  appId: "1:802797575693:web:a9774a53692655c6b33f44",
  measurementId: "G-1D1JMGKSVD"
};

const app = initializeApp(firebaseConfig);

export default app;