import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDtb4OE2_pQ5H47iD8GFiLhrXwq5D2iRoM",
  authDomain: "twitter-clone-ec6f5.firebaseapp.com",
  databaseURL: "https://twitter-clone-ec6f5.firebaseio.com",
  projectId: "twitter-clone-ec6f5",
  storageBucket: "twitter-clone-ec6f5.appspot.com",
  messagingSenderId: "257658695339",
  appId: "1:257658695339:web:84c2caa2f9f0b57d3851ee",
});

const db = firebaseApp.firestore();

export default db;
