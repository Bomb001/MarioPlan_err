import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDlPLohFlRxUiKDBcJjkeALhinV-RS7vK8",
    authDomain: "react-redux-firebase-mar-fbff2.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-mar-fbff2.firebaseio.com",
    projectId: "react-redux-firebase-mar-fbff2",
    storageBucket: "react-redux-firebase-mar-fbff2.appspot.com",
    messagingSenderId: "1079788668061",
    appId: "1:1079788668061:web:0e9cc2a22582c3bfe8c074",
    measurementId: "G-CBXN7NBEFX"
};
  
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});
    
export default firebase;