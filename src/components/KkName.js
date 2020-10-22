import React from 'react';

export default function KkName({ name, picture, showWishlist }) {
    return (
        <div className="kk-name" onClick={() => showWishlist(name)}>
            <img className="kk-picture" src={picture} alt="" />
            {name}
        </div>
    );
}
