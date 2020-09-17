import React from 'react';
import _ from 'lodash';
import KkName from './KkName';
import { profilePictures } from '../constants';
import { toggleMenu } from '../utils';

function getNameList(showWishlist) {
    return _.map(profilePictures, (value, key) => (
        <KkName
            key={key}
            name={key}
            picture={value}
            showWishlist={showWishlist}
        />
    ));
}

export default function KkList({ showWishlist }) {
    return (
        <div id="kkListContainer" className="kk-list-container">
            <div className="kk-list-header">
                <label>Participants</label>
                <button className="expand-menu" onClick={toggleMenu}>
                    <i className="fas fa-arrow-left" />
                </button>
            </div>
            <div className="kk-list">{getNameList(showWishlist)}</div>
        </div>
    );
}
