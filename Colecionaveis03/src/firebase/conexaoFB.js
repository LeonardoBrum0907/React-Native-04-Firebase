 import firebase from 'firebase';
 import 'firebase/firestore';
 
 const firebaseConfig = {
    apiKey: "AIzaSyBTnsq6eP7zB4srJcoGSlV-vjVPU-rbeC0",
    authDomain: "colecionaveisfb-e9324.firebaseapp.com",
    projectId: "colecionaveisfb-e9324",
    storageBucket: "colecionaveisfb-e9324.appspot.com",
    messagingSenderId: "211608122876",
    appId: "1:211608122876:web:d6a1c6a65adbafb4beee79",
    measurementId: "G-W65K1NCREH"
  };
  
var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();