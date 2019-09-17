"use strict";

var admin = require('firebase-admin');

exports.initFirebaseConnection = async firebase => {
  try {
    var firebaseConfig = {
      apiKey: "AIzaSyBfaoj7A7Pv3iWduetQsmZAyLada3a_Uk4",
      authDomain: "todolist-dev-3e715.firebaseapp.com",
      databaseURL: "https://todolist-dev-3e715.firebaseio.com",
      projectId: "todolist-dev-3e715",
      storageBucket: "",
      messagingSenderId: "424824951267",
      appId: "1:424824951267:web:76c082cc77ee0989b910d6"
    }; //testing

    firebase.initializeApp(firebaseConfig);
    /*
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
        var errorCode=error.Code;
        var errorMessage=error.message;
        console.log('errorCodecreate',errorCode);
        console.log('errorMessagecreate',errorMessage);
      });
      */
  } catch (error) {
    throw error;
  }
};

exports.initAdmin = async () => {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://todolist-dev-3e715.firebaseio.com/'
  });
};

exports.admin = admin;