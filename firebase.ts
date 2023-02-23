import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBcSVzBDZGbrcQiXjRVs0IWnUc-tc_jhe4",
  authDomain: "chatbot-firebase-245a8.firebaseapp.com",
  projectId: "chatbot-firebase-245a8",
  storageBucket: "chatbot-firebase-245a8.appspot.com",
  messagingSenderId: "271201732923",
  appId: "1:271201732923:web:323f399570c941ab33cf1e"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };