import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_qd4s6qvKvOd8MhigT-C0t7kA8SNqmzs",
    authDomain: "todoapp-6caf8.firebaseapp.com",
    projectId: "todoapp-6caf8",
    storageBucket: "todoapp-6caf8.appspot.com",
    messagingSenderId: "908791188526",
    appId: "1:908791188526:web:667dd4d52dc46c3ddda3bf",
    measurementId: "G-Q7W4BJVY44"
  })

  const db = firebaseApp.firestore();

  export default db;
//   export { db };