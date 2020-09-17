import React from 'react';
import _ from 'lodash';
import KkName from './KkName';
import { users } from '../constants';
import { toggleMenu } from '../utils';

function getNameList(showWishlist) {
    return _.map(users, (user, key) => (
        <KkName
            key={key}
            name={user.name}
            picture={user.profilePicture}
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
