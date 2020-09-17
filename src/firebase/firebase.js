import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
    /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: 'AIzaSyBE3eULJlMHE5NLts1Zi8qoyEWNoAWIS5s',
    authDomain: 'christmas-kks.firebaseapp.com',
    databaseURL: 'https://christmas-kks.firebaseio.com',
    projectId: 'christmas-kks',
    storageBucket: 'christmas-kks.appspot.com',
    messagingSenderId: '970686542628',
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

export { auth, database, storage };
