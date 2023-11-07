import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAmxr-Mjpm6We3ppalI_5RGjIuEI2AODvk",
  authDomain: "peliculasia.firebaseapp.com",
  databaseURL: "https://peliculasia-default-rtdb.firebaseio.com",
  projectId: "peliculasia",
  storageBucket: "peliculasia.appspot.com",
  messagingSenderId: "574249265172",
  appId: "1:574249265172:web:6396ba608b90b91b275f01",
  measurementId: "G-99KB9TZ6SQ",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
