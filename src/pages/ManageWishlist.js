import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import AddWishlistItem from '../components/AddWishlistItem';
import { routes } from '../constants';
import { logout } from '../firebase/auth';
import WishlistItem from '../components/WishlistItem';
import { saveUserWishlist, getUserWishlist } from '../firebase/database';
import useAutoAuthentication from '../hooks/useAutoAuthentication';
import useLoadUsers from '../hooks/useLoadUsers';

export default function ManageWishlist(props) {
    const [userName, setUserName] = useState(null);
    const [userWishlist, setUserWishlist] = useState([]);
    const users = useLoadUsers();
    const loggedInUser = useAutoAuthentication(undefined, () =>
        props.history.push(routes.signIn)
    );

    useEffect(() => {
        if (loggedInUser && users) {
            const user = _.find(users, (x) => x.email === loggedInUser.email);
            const userName = user.name.toLowerCase();

            getUserWishlist(userName, (response) =>
                setUserWishlist(response ?? [])
            );
            setUserName(userName);
        }
    }, [loggedInUser, users]);

    function saveWishlist(updatedWishlist) {
        saveUserWishlist(userName, updatedWishlist);
        setUserWishlist(updatedWishlist);
    }

    function onAdd(description, link) {
        const updatedWishlist = [
            ...userWishlist,
            { description, link, order: userWishlist.length + 1 },
        ];
        saveWishlist(updatedWishlist);
    }

    function onDelete(currentOrder) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to delete this item?')) {
            const updatedWishlist = userWishlist
                .filter((x) => x.order !== currentOrder)
                .map((x, index) => ({ ...x, order: index + 1 }));
            saveWishlist(updatedWishlist);
        }
    }

    function onMoveUp(currentOrder) {
        const updatedWishlist = userWishlist.map((item) => {
            if (item.order === currentOrder) {
                return {
                    ...item,
                    order: Math.max(1, item.order - 1),
                };
            }

            if (item.order === currentOrder - 1) {
                return {
                    ...item,
                    order: item.order + 1,
                };
            }

            return item;
        });
        saveWishlist(updatedWishlist);
    }

    function onMoveDown(currentOrder) {
        const updatedWishlist = userWishlist.map((item) => {
            if (item.order === currentOrder) {
                return {
                    ...item,
                    order: Math.min(userWishlist.length, item.order + 1),
                };
            }

            if (item.order === currentOrder + 1) {
                return {
                    ...item,
                    order: item.order - 1,
                };
            }

            return item;
        });
        saveWishlist(updatedWishlist);
    }

    function renderItems() {
        if (!userWishlist.length) {
            return <div>No Items Available</div>;
        }

        return userWishlist
            .sort((a, b) => a.order - b.order)
            .map((item, index) => (
                <WishlistItem
                    key={item.order}
                    description={item.description}
                    editMode={true}
                    link={item.link}
                    onDelete={onDelete}
                    onMoveUp={onMoveUp}
                    onMoveDown={onMoveDown}
                    order={item.order}
                />
            ));
    }

    if (!userName) {
        return null;
    }

    return (
        <div className="manage-wishlist-container">
            <div className="manage-wishlist">
                <h2>Manage</h2>
                <AddWishlistItem onAdd={onAdd} />
                <h3>Wishlist Items</h3>
                {renderItems()}
            </div>
            <div className="page-actions">
                <button
                    className="blue-button"
                    onClick={() => props.history.push(routes.home)}
                >
                    Home
                </button>
                <button
                    className="blue-button"
                    onClick={() =>
                        logout(() => props.history.push(routes.signIn))
                    }
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

ManageWishlist.defaultProps = {};
