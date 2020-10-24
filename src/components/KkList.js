import React from 'react';
import _ from 'lodash';
import KkName from './KkName';

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
            <label className="kk-list-header">Participants</label>
            <div className="kk-list">{getNameList()}</div>
        </div>
    );
}
