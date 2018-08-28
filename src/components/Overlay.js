import React from 'react';
import sign from '../images/sign.png';
import merryChristmas from '../images/merryChristmas.jpg';
import { toggleOverlay } from '../utils';
import '../css/overlay.css';

export default function Overlay(props) {
    return (
        <div id="overlay" className="overlay" onClick={toggleOverlay}>
            <img src={merryChristmas} alt="" />
            <img className="sign" src={sign} alt="" />
            <div className="sign-name">{props.name}</div>
        </div>
    );
}
