import React from 'react';
import { wishlists } from '../constants';
import '../css/wishlist.css';

function toggleWishList(name) {
  return event => {
    event.preventDefault();
    const wishlist = document.getElementById(`${name}Wishlist`);
    wishlist.classList.toggle('visible');
  };
}

export default function WishList(props) {
  return (
    <div id={`${props.name}Wishlist`} className="wishlist-overlay">
      <div className="wishlist-overlay-body">
        <h3>
          {`${props.name}'s Wish List`}
          <div className="close-wishlist" onClick={toggleWishList(props.name)}>
            X
          </div>
        </h3>
        <ul>
          {wishlists[props.name].map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
