import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyBE3eULJlMHE5NLts1Zi8qoyEWNoAWIS5s",
    authDomain: "christmas-kks.firebaseapp.com",
    databaseURL: "https://christmas-kks.firebaseio.com",
    projectId: "christmas-kks",
    storageBucket: "christmas-kks.appspot.com",
    messagingSenderId: "970686542628"
};
var fire = firebase.initializeApp(config);
export default fire;