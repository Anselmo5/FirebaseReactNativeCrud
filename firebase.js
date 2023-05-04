import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyACY7xPnhYfYgoxevMDvYrd-tJhkkTFg8s",
    authDomain: "fir-reactnativecrud-4dadd.firebaseapp.com",
    projectId: "fir-reactnativecrud-4dadd",
    storageBucket: "fir-reactnativecrud-4dadd.appspot.com",
    messagingSenderId: "1031179711840",
    appId: "1:1031179711840:web:9c0aa3b4a43d27de2b1a05",
    measurementId: "G-HEX6EWP57H"
  };


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  } // cria uma conecção

  export default firebase