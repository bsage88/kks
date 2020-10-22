import React from 'react';
import sign from '../images/sign.png';
import merryChristmas from '../images/merryChristmas.jpg';

export default function Overlay(props) {
    const className = !props.isOverlayVisible
        ? 'overlay overlay--hidden'
        : 'overlay';

    return (
        <div id="overlay" className={className} onClick={props.hideOverlay}>
            <img className="banner" src={merryChristmas} alt="" />
            <div className="overlay-body">
                <img className="sign" src={sign} alt="" />
                <div className="sign-name">{props.name}</div>
            </div>
        </div>
    );
}
