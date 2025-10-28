import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../utils';
import WishList from './WishList';

export default function KkName({ name, picture }) {
    const [wishlistVisible, setWishlistVisible] = useState(false);

    return (
        <div className="kk-card">
            <img className="kk-card__picture" src={picture} alt="" />
            <div className="kk-card__info">
                <span className="kk-card__name">
                    {capitalizeFirstLetter(name)}
                </span>
                <button
                    className="blue-button kk-card__wishlist-button"
                    onClick={() => setWishlistVisible(true)}
                    type="button"
                >
                    Wishlist
                </button>
            </div>
            <WishList
                closeWishlist={() => setWishlistVisible(false)}
                isVisible={wishlistVisible}
                name={name}
            />
        </div>
    );
}
