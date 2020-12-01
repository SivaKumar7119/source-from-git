import firebase from "firebase";

var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAjtTmO6NMj_z1c98RXZ-DKeFelKibZTJY",
    authDomain: "contact-form-ae68c.firebaseapp.com",
    databaseURL: "https://contact-form-ae68c.firebaseio.com",
    projectId: "contact-form-ae68c",
    storageBucket: "contact-form-ae68c.appspot.com",
    messagingSenderId: "471373731441",
    appId: "1:471373731441:web:c5ded8c9c96855d55c2dd0",
});

var db = firebaseConfig.firestore();

export { db };