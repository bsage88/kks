import { useState } from 'react';
import { capitalizeFirstLetter } from '../utils';
import WishList from './WishList';

export default function KkName({ name, picture }) {
    const [wishlistVisible, setWishlistVisible] = useState(false);

    return (
        <>
            <button
                className="blue-button kk-card"
                onClick={() => setWishlistVisible(true)}
                type="button"
            >
                <span className="kk-card__name">
                    {capitalizeFirstLetter(name)}
                </span>
                <img className="kk-card__picture" src={picture} alt="" />
            </button>
            <WishList
                closeWishlist={() => setWishlistVisible(false)}
                isVisible={wishlistVisible}
                name={name}
            />
        </>
    );
}
