import { firebase } from './firebase';

export function saveKKMappings(mappings) {
    firebase.database.ref('mappings').set(mappings);
}

export function saveWishlists(wishlists) {
    firebase.database.ref('wishlists').set(wishlists);
}

export function getUserWishlist(user, callback) {
    firebase.database
        .ref(`/wishlists/${user}`)
        .once('value')
        .then(response => {
            callback(response.val());
        });
}
