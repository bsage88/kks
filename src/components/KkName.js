import React from 'react';

export default function KkName({ name, picture, showWishlist }) {
    const profilePicture = picture;

    return (
        <div className="kk-name" onClick={() => showWishlist(name)}>
            <img className="kk-picture" src={profilePicture} alt="" />
            {name}
        </div>
    );
}
