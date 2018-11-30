import React from 'react';
import { wishlists } from '../constants';
import '../css/wishlist.css';

function toggleWishList(event) {
  event.preventDefault();
  const wishlist = document.getElementById('wishlist');
  wishlist.classList.toggle('visible');
}

export default function WishList(props) {
  const visible = wishlists[props.name] ? 'visible': '';
  const items = !wishlists[props.name]
    ? null
    : wishlists[props.name].map(item => <li>{item}</li>);

  return (
    <div id="wishlist" className={`wishlist-overlay ${visible}`}>
      <div className="wishlist-overlay-body">
        <h3>
          {`${props.name}'s Wish List`}
          <div className="close-wishlist" onClick={props.setWishlistName('')}>
            X
          </div>
        </h3>
        <ul>{items}</ul>
      </div>
    </div>
  );
}
