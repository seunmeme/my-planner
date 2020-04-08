import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyA5xmb13PQi4V3LEueSrS6_hZXb0e_nXKU',
    authDomain: "my-planner-a94aa.firebaseapp.com",
    databaseURL: "https://my-planner-a94aa.firebaseio.com",
    projectId: "my-planner-a94aa",
    storageBucket: "my-planner-a94aa.appspot.com",
    messagingSenderId: "283840059519",
    appId: "1:283840059519:web:b61d8f10098315aac7474a"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;