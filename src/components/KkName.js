import React, { Fragment } from 'react';
import WishList from './WishList';
import None from '../images/none.jpg';
import '../css/kkName.css';

function toggleWishList(name) {
    return event => {
      event.preventDefault();
      const wishlist = document.getElementById(`${name}Wishlist`);
      wishlist.classList.toggle('visible');
    };
  }

export default function KkName(props) {
  const profilePicture = props.picture || None;

  return (
    <Fragment>
      <div className="kk-name" onClick={toggleWishList(props.name)}>
        <img className="kk-picture" src={profilePicture} alt="" />
        {props.name}
      </div>
      <WishList name={props.name} />
    </Fragment>
  );
}
