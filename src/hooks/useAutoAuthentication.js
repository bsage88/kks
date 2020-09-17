import { useEffect } from 'react';
import { auth } from '../firebase/firebase';

export default function useAutoAuthentication(onLoggedIn, onLoggedOut) {
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                if (onLoggedIn) onLoggedIn();
            } else {
                if (onLoggedOut) onLoggedOut();
            }
        });
    }, [onLoggedIn, onLoggedOut]);
}
