import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export default function useAutoAuthentication(onLoggedIn, onLoggedOut) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                if (onLoggedIn) onLoggedIn();
            } else {
                setUser(null);
                if (onLoggedOut) onLoggedOut();
            }
        });

        return () => unsubscribe();
    }, [onLoggedIn, onLoggedOut]);

    return user;
}
