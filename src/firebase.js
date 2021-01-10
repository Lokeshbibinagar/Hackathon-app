import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCyYNYguZ4S2NcBOg12acDvY4vHtzKxPxc",
    authDomain: "hackathon-app-2e75d.firebaseapp.com",
    projectId: "hackathon-app-2e75d",
    storageBucket: "hackathon-app-2e75d.appspot.com",
    messagingSenderId: "449652564282",
    appId: "1:449652564282:web:a738b976ddc0f62cf43003",
    measurementId: "G-BPFZHGWH45"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
