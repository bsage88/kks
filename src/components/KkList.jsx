import _ from 'lodash';
import KkName from './KkName';

export default function KkList({ profilePictures, showWishlist, users }) {
    return (
        <div id="kkListContainer" className="kk-list-container">
            <label className="kk-list-header">Participants</label>
            <div className="kk-list">
                {_.map(users, (user, name) => (
                    <KkName
                        key={name}
                        name={name}
                        picture={
                            profilePictures?.[name]?.url ??
                            profilePictures.none.url
                        }
                    />
                ))}
            </div>
        </div>
    );
}
