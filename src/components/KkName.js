import React from 'react';
import None from '../images/none.jpg';

export default function KkName({ name, picture, showWishlist }) {
    const profilePicture = picture || None;

    return (
        <div className="kk-name" onClick={() => showWishlist(name)}>
            <img className="kk-picture" src={profilePicture} alt="" />
            {name}
        </div>
    );
}
