import React, { useState, useEffect } from 'react';
import { getUserWishlist } from '../firebase/database';
import WishlistItem from './WishlistItem';
import { capitalizeFirstLetter } from '../utils';

export default function WishList({ closeWishlist, isVisible, name }) {
    const [userWishlist, setUserWishlist] = useState([]);

    useEffect(() => {
        if (name) {
            getUserWishlist(name, (response) =>
                setUserWishlist(response ?? [])
            );
        }
    }, [name]);

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
                    editMode={false}
                    link={item.link}
                    order={item.order}
                />
            ));
    }

    if (!isVisible) {
        return null;
    }

    return (
        <div className="wishlist-overlay">
            <div className="wishlist-overlay__body">
                <h2>{`${capitalizeFirstLetter(name)}'s Wishlist Items`}</h2>
                {renderItems()}
                <button
                    className="blue-button wishlist-overlay__close"
                    onClick={closeWishlist}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
