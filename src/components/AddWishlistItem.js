import React from 'react';

export default function AddWishlistItem(props) {
    return (
        <div className="add-wishlist-item">
            <h3>Add Wishlist Item</h3>
            <div className="add-wishlist-item__inputs">
                <div className="add-wishlist-item__input">
                    <label htmlFor="description" className="input-label">
                        DESCRIPTION
                    </label>
                    <input
                        id="description"
                        name="description"
                        onChange={(event) => {}}
                        type="text"
                        value=""
                    />
                </div>
                <div className="add-wishlist-item__input">
                    <label htmlFor="link" className="input-label">
                        LINK
                    </label>
                    <input
                        id="link"
                        name="link"
                        onChange={(event) => {}}
                        type="text"
                        value=""
                    />
                </div>
            </div>
            <button className="blue-button add-wishlist-item__button">
                Add
            </button>
        </div>
    );
}
