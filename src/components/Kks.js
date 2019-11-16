import React, { useState, useEffect } from 'react';
import WishList from './WishList';
import KkList from './KkList';
import Overlay from './Overlay';
import SnowFlakes from './SnowFlakes';
import { toggleMenu, toggleOverlay, capitalizeFirstLetter } from '../utils';
import { firebase } from '../firebase';
import '../css/kks.css';

export default function Kks(props) {
    const [matchedKK, setMatchedKK] = useState(null);
    const [wishlistUser, setWishlistUser] = useState(null);
    const [isWishlistVisible, setIsWishlistVisible] = useState(false);

    useEffect(() => {
        if (firebase.auth.currentUser) {
            const userName = capitalizeFirstLetter(
                firebase.auth.currentUser.email.split('@')[0]
            );

            firebase.database
                .ref(`/mappings/${userName}`)
                .once('value')
                .then(matchedKKSnapshot => {
                    setMatchedKK(matchedKKSnapshot.val());
                });
        }
    }, []);

    if (!firebase.auth.currentUser) {
        return (
            <a
                className="login-message"
                href="http://christmas-kks.firebaseapp.com"
            >
                Go to sign in page: http://christmas-kks.firebaseapp.com
            </a>
        );
    }

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
                showWishlist={name => {
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
