import React from 'react';

export default function WishlistItem(props) {
    function deleteButton() {
        return (
            <button
                className="wishlist-item__action wishlist-item__action--delete"
                onClick={() => props.onDelete(props.order)}
                title="Delete"
            >
                <i className="fa fa-times" />
            </button>
        );
    }

    function upButton() {
        return (
            <button
                className="wishlist-item__action wishlist-item__action--up"
                onClick={() => props.onMoveUp(props.order)}
                title="Move Up"
            >
                <i className="fa fa-arrow-up" />
            </button>
        );
    }

    function downButton() {
        return (
            <button
                className="wishlist-item__action wishlist-item__action--down"
                onClick={() => props.onMoveDown(props.order)}
                title="Move Down"
            >
                <i className="fa fa-arrow-down" />
            </button>
        );
    }

    return (
        <div className="wishlist-item">
            {props.editMode && (
                <>
                    {deleteButton()}
                    {upButton()}
                    {downButton()}
                </>
            )}
            <span className="wishlist-item__number">{props.order})</span>
            {props.link && (
                <a
                    className="wishlist-item__description"
                    href={props.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={props.link}
                >
                    {props.description}
                </a>
            )}
            {!props.link && (
                <div className="wishlist-item__description">
                    {props.description}
                </div>
            )}
        </div>
    );
}
