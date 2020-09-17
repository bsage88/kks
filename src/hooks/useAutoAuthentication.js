import { useEffect } from 'react';
import { firebase } from '../firebase';

export default function useAutoAuthentication(onLoggedIn, onLoggedOut) {
    useEffect(() => {
        firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                if (onLoggedIn) onLoggedIn();
            } else {
                if (onLoggedOut) onLoggedOut();
            }
        });
    }, [onLoggedIn, onLoggedOut]);
}
