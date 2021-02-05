import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBUlet4f8u0tv3dlhmD1C3L9uvuCfdl_mU",
  authDomain: "book-new-42e2f.firebaseapp.com",
  projectId: "book-new-42e2f",
  storageBucket: "book-new-42e2f.appspot.com",
  messagingSenderId: "693518391596",
  appId: "1:693518391596:web:2c78e75407b8b28763f489",
  measurementId: "G-CYJRHQ2BN7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
