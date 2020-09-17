import React, { useState, useEffect } from 'react';
import { getUserWishlist } from '../database';

export default function WishList({ name, closeWishlist }) {
    const [userWishlist, setUserWishlist] = useState(null);

    useEffect(() => {
        if (name) {
            getUserWishlist(name, setUserWishlist);
        }

        return () => setUserWishlist(null);
    }, [name]);

    if (!name || !userWishlist) {
        return null;
    }

    return (
        <div id="wishlist" className="wishlist-overlay">
            <div className="wishlist-overlay-body">
                <h3>
                    {`${name}'s Wish List`}
                    <div className="close-wishlist" onClick={closeWishlist}>
                        X
                    </div>
                </h3>
                <ul>
                    {userWishlist.map((item) => (
                        <li key={`wish-${name}`}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
