import firebase from "firebae/compat/app";
import "firebase/compat/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyDh4mNgFzL94i_JpwZ9fGuSZw6upcTcaWk",
    authDomain: "fir-crudreactnative.firebaseapp.com",
    projectId: "fir-crudreactnative",
    storageBucket: "fir-crudreactnative.appspot.com",
    messagingSenderId: "1045355613902",
    appId: "1:1045355613902:web:b5b79d1f41a0418bed8a9f",
    measurementId: "G-XN0W5XYGEK"
  };

  if(!firebase.apps.length){
    console.log(`Conectando... ${firebase.apps.length}`);
    firebase.initializeApp(firebaseConfig)
    console.log(`Conectado ${firebase.apps.length}`);
  }

  export default firebase;