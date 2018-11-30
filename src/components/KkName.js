import React, { Fragment } from 'react';
import None from '../images/none.jpg';
import '../css/kkName.css';

function toggleWishList(setWishlistName, name) {
  return event => {
    event.preventDefault();
    setWishlistName(name);
    const wishlist = document.getElementById('wishlist');
    wishlist.classList.toggle('visible');
  };
}

export default function KkName(props) {
  const profilePicture = props.picture || None;

  return (
    <Fragment>
      <div
        className="kk-name"
        onClick={props.setWishlistName(props.name)}
      >
        <img className="kk-picture" src={profilePicture} alt="" />
        {props.name}
      </div>
    </Fragment>
  );
}
