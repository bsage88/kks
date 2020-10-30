import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import WishList from '../components/WishList';
import KkList from '../components/KkList';
import Overlay from '../components/Overlay';
import SnowFlakes from '../components/SnowFlakes';
import { generateKKMappings } from '../utils';
import { auth, database } from '../firebase/firebase';
import { routes } from '../constants';
import useAutoAuthentication from '../hooks/useAutoAuthentication';
import useLoadUsers from '../hooks/useLoadUsers';
import useLoadProfilePictures from '../hooks/useLoadProfilePictures';
import { logout } from '../firebase/auth';

export default function Kks({ history }) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [matchedKK, setMatchedKK] = useState(null);
    const [wishlistUser, setWishlistUser] = useState(null);
    const [isWishlistVisible, setIsWishlistVisible] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const users = useLoadUsers();
    const profilePictures = useLoadProfilePictures();
    const loggedInUser = useAutoAuthentication(undefined, () =>
        history.push(routes.signIn)
    );

    useEffect(() => {
        if (users && profilePictures) {
            setIsLoading(false);
        }
    }, [users, profilePictures]);

    useEffect(() => {
        if (loggedInUser && users) {
            const user = _.find(users, (x) => x.email === loggedInUser.email);
            const userName = user.name.toLowerCase();

            if (user.isAdmin) {
                setIsAdmin(true);
            }

            database
                .ref(`/mappings/${userName}`)
                .once('value')
                .then((matchedKKSnapshot) => {
                    setMatchedKK(matchedKKSnapshot.val());
                });
        }
    }, [loggedInUser, users]);

    if (!loggedInUser || isLoading) {
        return null;
    }

    return (
        <div className="kk-container">
            <div className="kk-button-container">
                <button
                    className="blue-button kk-button"
                    onClick={() => setIsOverlayVisible(true)}
                >
                    Show your KK
                </button>

                <Overlay
                    name={matchedKK}
                    isOverlayVisible={isOverlayVisible}
                    hideOverlay={() => setIsOverlayVisible(false)}
                />
            </div>
            <KkList
                profilePictures={profilePictures}
                users={users}
                showWishlist={(name) => {
                    setWishlistUser(name);
                    setIsWishlistVisible(true);
                }}
            />
            {isWishlistVisible && (
                <WishList
                    name={wishlistUser}
                    closeWishlist={() => setIsWishlistVisible(false)}
                />
            )}
            <div className="page-actions">
                {isAdmin && (
                    <button
                        className={'blue-button'}
                        disabled={isGenerating}
                        onClick={() => {
                            setIsGenerating(true);
                            generateKKMappings(users).then(() =>
                                setIsGenerating(false)
                            );
                        }}
                    >
                        Generate
                    </button>
                )}
                <button
                    className="blue-button"
                    onClick={() => history.push(routes.manageWishlist)}
                >
                    Manage Wishlist
                </button>
                <button
                    className="blue-button"
                    onClick={() => logout(() => history.push(routes.signIn))}
                >
                    Logout
                </button>
            </div>
            <SnowFlakes />
        </div>
    );
}
