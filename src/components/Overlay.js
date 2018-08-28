import React from 'react';
import '../css/overlay.css';
import { toggleOverlay } from '../utils';

export default function Overlay(props) {
    return (
        <div id="overlay" className="overlay">
            <div className="overlay-body">
                <button onClick={toggleOverlay}>Close</button>
            </div>
        </div>
    );
}
