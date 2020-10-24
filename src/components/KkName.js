import React from 'react';
import { capitalizeFirstLetter } from '../utils';

export default function KkName({ name, picture, showWishlist }) {
    return (
        <div className="kk-card" onClick={() => showWishlist(name)}>
            <img className="kk-card__picture" src={picture} alt="" />
            <div className="kk-card__info">
                <span className="kk-card__name">
                    {capitalizeFirstLetter(name)}
                </span>
                <button
                    type="button"
                    className="blue-button kk-card__wishlist-button"
                >
                    Wishlist
                </button>
            </div>
        </div>
    );
}
