import React, { useState, useEffect } from 'react';
import WishList from '../components/WishList';
import KkList from '../components/KkList';
import Overlay from '../components/Overlay';
import SnowFlakes from '../components/SnowFlakes';
import { toggleMenu, capitalizeFirstLetter } from '../utils';
import { auth, database } from '../firebase/firebase';
import { routes } from '../constants';
import useAutoAuthentication from '../hooks/useAutoAuthentication';
import useLoadUsers from '../hooks/useLoadUsers';
import useLoadProfilePictures from '../hooks/useLoadProfilePictures';
import { logout } from '../firebase/auth';

export default function Kks({ history }) {
    const [isLoading, setIsLoading] = useState(true);
    const [matchedKK, setMatchedKK] = useState(null);
    const [wishlistUser, setWishlistUser] = useState(null);
    const [isWishlistVisible, setIsWishlistVisible] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const users = useLoadUsers();
    const profilePictures = useLoadProfilePictures();
    useAutoAuthentication(undefined, () => history.push(routes.signIn));

    useEffect(() => {
        if (users && profilePictures) {
            setIsLoading(false);
        }
    }, [users, profilePictures]);

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

    if (!auth.currentUser || isLoading) {
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
                profilePictures={profilePictures}
                users={users}
                showWishlist={(name) => {
                    setWishlistUser(name);
                    setIsWishlistVisible(true);
                }}
            />
            <div className="kk-button-container">
                <button
                    className="kk-button"
                    onClick={() => setIsOverlayVisible(true)}
                >
                    Show your KK
                </button>
            </div>
            {isWishlistVisible && (
                <WishList
                    name={wishlistUser}
                    closeWishlist={() => setIsWishlistVisible(false)}
                />
            )}
            <Overlay
                name={matchedKK}
                isOverlayVisible={isOverlayVisible}
                hideOverlay={() => setIsOverlayVisible(false)}
            />
            <SnowFlakes />
        </div>
    );
}
