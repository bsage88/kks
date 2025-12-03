import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

var config = {
    /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: 'AIzaSyBE3eULJlMHE5NLts1Zi8qoyEWNoAWIS5s',
    authDomain: 'christmas-kks.firebaseapp.com',
    databaseURL: 'https://christmas-kks.firebaseio.com',
    projectId: 'christmas-kks',
    storageBucket: 'christmas-kks.appspot.com',
    messagingSenderId: '970686542628',
};

const app = initializeApp(config);

const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { auth, database, storage };
