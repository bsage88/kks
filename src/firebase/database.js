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

export function saveUserEmail(userKey, email) {
    database.ref(`/users/${userKey}/email`).set(email);
}

export function getUserWishlist(user, callback) {
    database
        .ref(`/wishlists/${user}`)
        .once('value')
        .then((response) => {
            callback(response.val());
        });
}
