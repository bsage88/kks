import React from 'react';
import AddWishlistItem from '../components/AddWishlistItem';
import SnowFlakes from '../components/SnowFlakes';
import { routes } from '../constants';
import { logout } from '../firebase/auth';
import WishlistItem from '../components/WishlistItem';

export default function ManageWishlist(props) {
    return (
        <div className="manage-wishlist-container">
            <div className="manage-wishlist">
                <h2>Manage</h2>
                <AddWishlistItem />

                <h3>Wishlist Items</h3>
                {props.wishlist.map((item) => (
                    <WishlistItem
                        description={item.description}
                        link={item.link}
                        order={item.order}
                    />
                ))}
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
            <SnowFlakes />
        </div>
    );
}

ManageWishlist.defaultProps = {
    wishlist: [
        { description: 'New Book', link: 'http://www.amazon.ca', order: 1 },
        { description: 'Computer', order: 2 },
        { description: 'Bike', link: 'http://www.amazon.ca', order: 3 },
    ],
};
