import React from 'react';

export default function WishlistItem(props) {
    if (!props.link) {
        return (
            <div className="wishlist-item">
                <span className="wishlist-item__number">{props.order})</span>
                <div>{props.description}</div>
                <i class="fa fa-times wishlist-item__delete"></i>
            </div>
        );
    }

    return (
        <div className="wishlist-item">
            <span className="wishlist-item__number">{props.order})</span>
            <a href={props.link} target="_blank">
                {props.description}
            </a>
            <i class="fa fa-times wishlist-item__delete"></i>
        </div>
    );
}
