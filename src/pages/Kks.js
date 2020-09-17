import React, { useState, useEffect } from 'react';
import WishList from '../components/WishList';
import KkList from '../components/KkList';
import Overlay from '../components/Overlay';
import SnowFlakes from '../components/SnowFlakes';
import { toggleMenu, toggleOverlay, capitalizeFirstLetter } from '../utils';
import { auth, database } from '../firebase/firebase';
import { routes } from '../constants';
import useAutoAuthentication from '../hooks/useAutoAuthentication';
import useLoadUsers from '../hooks/useLoadUsers';
import useLoadProfilePictures from '../hooks/useLoadProfilePictures';
import { logout } from '../firebase/auth';

export default function Kks({ history }) {
    const [matchedKK, setMatchedKK] = useState(null);
    const [wishlistUser, setWishlistUser] = useState(null);
    const [isWishlistVisible, setIsWishlistVisible] = useState(false);

    const users = useLoadUsers();
    const profilePictures = useLoadProfilePictures();
    useAutoAuthentication(undefined, () => history.push(routes.signIn));

    useEffect(() => {
        if (auth.currentUser) {
            const userName = capitalizeFirstLetter(
                auth.currentUser.email.split('@')[0]
            );
            database
                .ref(`/mappings/${userName}`)
                .once('value')
                .then((matchedKKSnapshot) => {
                    setMatchedKK(matchedKKSnapshot.val());
                });
        }
    }, []);

    if (!auth.currentUser) {
        return null;
    }

    return (
        <div className="kk-container">
            <button
                className="logout-button"
                onClick={() => logout(() => history.push(routes.signIn))}
            >
                Logout
            </button>
            <div className="menu-container">
                <button className="expand-menu" onClick={toggleMenu}>
                    <i className="fas fa-bars" />
                </button>
            </div>
            <KkList
                showWishlist={(name) => {
                    setWishlistUser(name);
                    setIsWishlistVisible(true);
                }}
            />
            <div className="kk-button-container">
                <button className="kk-button" onClick={toggleOverlay}>
                    Show your KK
                </button>
            </div>
            {isWishlistVisible && (
                <WishList
                    name={wishlistUser}
                    closeWishlist={() => setIsWishlistVisible(false)}
                />
            )}
            <Overlay name={matchedKK} />
            <SnowFlakes />
        </div>
    );
}
