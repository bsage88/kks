import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updatePassword,
    fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

// Sign out
export const doSignOut = () => signOut(auth);

// Password Reset
export const doPasswordReset = (email) => sendPasswordResetEmail(auth, email);

// Password Change
export const doPasswordUpdate = (password) => {
    const user = auth.currentUser;
    if (user) {
        return updatePassword(user, password);
    }
    throw new Error('No user is currently signed in');
};

export const doFetchSignInMethodsForEmail = (email) =>
    fetchSignInMethodsForEmail(auth, email);

export const logout = (callback) => signOut(auth).then(callback);
