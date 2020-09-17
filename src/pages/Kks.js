import React, { useState, useEffect } from 'react';
import WishList from '../components/WishList';
import KkList from '../components/KkList';
import Overlay from '../components/Overlay';
import SnowFlakes from '../components/SnowFlakes';
import { toggleMenu, toggleOverlay, capitalizeFirstLetter } from '../utils';
import { firebase } from '../firebase';
import { routes } from '../constants';
import useAutoAuthentication from '../hooks/useAutoAuthentication';

export default function Kks({ history }) {
    const [matchedKK, setMatchedKK] = useState(null);
    const [wishlistUser, setWishlistUser] = useState(null);
    const [isWishlistVisible, setIsWishlistVisible] = useState(false);
    useAutoAuthentication(undefined, () => history.push(routes.signIn));

    useEffect(() => {
        if (firebase.auth.currentUser) {
            const userName = capitalizeFirstLetter(
                firebase.auth.currentUser.email.split('@')[0]
            );
            firebase.database
                .ref(`/mappings/${userName}`)
                .once('value')
                .then((matchedKKSnapshot) => {
                    setMatchedKK(matchedKKSnapshot.val());
                });
        }
    }, []);

    // return (
    //     <button
    //         onClick={() =>
    //             firebase.auth.signOut().then(() => history.push(routes.signIn))
    //         }
    //     >
    //         Logout
    //     </button>
    // );

    if (!matchedKK) {
        return null;
    }

    return (
        <div className="kk-container">
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
