import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFJ78foqaGFhNdsRVxfTWVE_qWbWHbco8",
  authDomain: "sujay-slack.firebaseapp.com",
  databaseURL: "https://sujay-slack.firebaseio.com",
  projectId: "sujay-slack",
  storageBucket: "sujay-slack.appspot.com",
  messagingSenderId: "303699278750",
  appId: "1:303699278750:web:eabb7c15b0d24b80c6b48f",
  measurementId: "G-4408RF5P1X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
