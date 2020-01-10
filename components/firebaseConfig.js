import firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB9Zzf8YJJPH5bfUyjiWpoaLU76T1wHYx0",
  authDomain: "rnfirebasechat-d8d32.firebaseapp.com",
  databaseURL: "https://rnfirebasechat-d8d32.firebaseio.com/rn",
  storageBucket: "gs://rnfirebasechat-d8d32.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
