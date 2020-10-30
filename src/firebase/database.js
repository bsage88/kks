import { database } from './firebase';

export function getUsers(callback) {
    database
        .ref(`/users`)
        .once('value')
        .then((response) => {
            callback(response.val());
        });
}

export function saveKKMappings(mappings) {
    database.ref('mappings').set(mappings);
}

export function saveWishlists(wishlists) {
    database.ref('wishlists').set(wishlists);
}

export function saveUserWishlist(userName, wishlist) {
    database.ref(`/users/${userName}/wishlist`).set(wishlist);
}

export function saveUserEmail(userName, email) {
    database.ref(`/users/${userName}/email`).set(email);
}

export function getUserWishlist(userName, callback) {
    database
        .ref(`/users/${userName}/wishlist`)
        .once('value')
        .then((response) => {
            callback(response.val());
        });
}
