import React from 'react';
import None from '../images/none.jpg';
import '../css/kkName.css';

export default function Kks(props) {
    const profilePicture = props.picture || None;

    return (
        <div className="kk-name">
            <img className="kk-picture" src={profilePicture} alt="" />
            {props.name}
        </div>
    )
}