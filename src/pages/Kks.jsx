import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import KkList from '../components/KkList';
import Overlay from '../components/Overlay';
import { generateKKMappings } from '../utils';
import { ref, get } from 'firebase/database';
import { database } from '../firebase/firebase';
import { routes } from '../constants';
import useAutoAuthentication from '../hooks/useAutoAuthentication';
import useLoadUsers from '../hooks/useLoadUsers';
import useLoadProfilePictures from '../hooks/useLoadProfilePictures';
import { logout } from '../firebase/auth';

export default function Kks() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [matchedKK, setMatchedKK] = useState(null);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const navigate = useNavigate();

    const users = useLoadUsers();
    const profilePictures = useLoadProfilePictures();
    const loggedInUser = useAutoAuthentication(undefined, () =>
        navigate(routes.signIn)
    );

    useEffect(() => {
        if (users && profilePictures) {
            setIsLoading(false);
        }
    }, [users, profilePictures]);

    useEffect(() => {
        if (loggedInUser && users) {
            const user = _.find(
                users,
                (x) =>
                    x.email?.toLowerCase() === loggedInUser.email?.toLowerCase()
            );
            const userName = user?.name?.toLowerCase();

            if (user?.isAdmin) {
                setIsAdmin(true);
            }

            const mappingRef = ref(database, `/mappings/${userName}`);
            get(mappingRef).then((matchedKKSnapshot) => {
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
            <KkList profilePictures={profilePictures} users={users} />
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
                    onClick={() => navigate(routes.manageWishlist)}
                >
                    Manage Wishlist
                </button>
                <button
                    className="blue-button"
                    onClick={() => logout(() => navigate(routes.signIn))}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
