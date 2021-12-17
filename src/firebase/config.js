// Your web app's Firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABOsKJo5abkQzTJkR6jN5Zzot0m0fz39A",
    authDomain: "image-gallary-2dec1.firebaseapp.com",
    projectId: "image-gallary-2dec1",
    storageBucket: "image-gallary-2dec1.appspot.com",
    messagingSenderId: "994410478514",
    appId: "1:994410478514:web:9fc40970802d19a81942ab"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const  projectFirestore=firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore, timestamp};