import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

const getFirestoreDb = () => {
  return getFirestore(app);
};

export { app, getFirestoreDb };
