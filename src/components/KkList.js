import React from 'react';
import _ from 'lodash';
import KkName from './KkName';
import { users } from '../constants';
import { toggleMenu } from '../utils';

export default function KkList({ profilePictures, showWishlist, users }) {
    function getNameList() {
        return _.map(users, (user, name) => (
            <KkName
                key={name}
                name={name}
                picture={
                    profilePictures?.[name]?.url ?? profilePictures.none.url
                }
                showWishlist={showWishlist}
            />
        ));
    }

    return (
        <div id="kkListContainer" className="kk-list-container">
            <div className="kk-list-header">
                <label>Participants</label>
                <button className="expand-menu" onClick={toggleMenu}>
                    <i className="fas fa-arrow-left" />
                </button>
            </div>
            <div className="kk-list">{getNameList()}</div>
        </div>
    );
}
