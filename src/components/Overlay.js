import React from 'react';
import sign from '../images/sign.png';
import merryChristmas from '../images/merryChristmas.jpg';

export default function Overlay(props) {
    const className = !props.isOverlayVisible
        ? 'overlay overlay--hidden'
        : 'overlay';

    return (
        <div id="overlay" className={className} onClick={props.hideOverlay}>
            <img className="overlay__banner" src={merryChristmas} alt="" />
            <div className="overlay__body">
                <img className="overlay__sign" src={sign} alt="" />
                <div className="overlay__sign-name">{props.name}</div>
            </div>
        </div>
    );
}
