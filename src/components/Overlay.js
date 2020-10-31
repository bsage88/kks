import React from 'react';
import sign from '../images/sign.png';
import merryChristmas from '../images/merryChristmas.jpg';
import background from '../images/background.jpg';
import { capitalizeFirstLetter } from '../utils';

export default function Overlay(props) {
    if (!props.name) {
        return null;
    }

    const className = !props.isOverlayVisible
        ? 'overlay overlay--hidden'
        : 'overlay';

    return (
        <div id="overlay" className={className} onClick={props.hideOverlay}>
            <div className="overlay__shadow" />
            <div className="overlay__background">
                <img className="overlay__banner" src={merryChristmas} alt="" />
                <div className="overlay__body">
                    <img className="overlay__sign" src={sign} alt="" />
                    <div className="overlay__sign-name">
                        {capitalizeFirstLetter(props.name)}
                    </div>
                </div>
            </div>
        </div>
    );
}
