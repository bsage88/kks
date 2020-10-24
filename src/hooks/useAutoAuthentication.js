import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';

export default function useAutoAuthentication(onLoggedIn, onLoggedOut) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                if (onLoggedIn) onLoggedIn();
            } else {
                setUser(null);
                if (onLoggedOut) onLoggedOut();
            }
        });
    }, [onLoggedIn, onLoggedOut]);

    return user;
}
