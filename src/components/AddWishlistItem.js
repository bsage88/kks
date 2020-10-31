import React, { useState } from 'react';

export default function AddWishlistItem(props) {
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    function onAdd() {
        props.onAdd(description, link);
        setDescription('');
        setLink('');
    }

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
                        onChange={(event) => setDescription(event.target.value)}
                        placeholder="New Popular Item"
                        type="text"
                        value={description}
                    />
                </div>
                <div className="add-wishlist-item__input">
                    <label htmlFor="link" className="input-label">
                        LINK
                    </label>
                    <input
                        id="link"
                        name="link"
                        onChange={(event) => setLink(event.target.value)}
                        placeholder="http://amazon.ca/"
                        type="text"
                        value={link}
                    />
                </div>
            </div>
            <button
                className="blue-button add-wishlist-item__button"
                disabled={!description}
                onClick={onAdd}
            >
                Add
            </button>
        </div>
    );
}
