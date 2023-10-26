import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwk8cQw_jXBfZ0xkk3Xg9hKB67bv3caeA",
  authDomain: "training-app-fb918.firebaseapp.com",
  projectId: "training-app-fb918",
  storageBucket: "training-app-fb918.appspot.com",
  messagingSenderId: "800217543959",
  appId: "1:800217543959:web:5d1596c9dcc2a731f67352"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };