import { ref, get, set } from 'firebase/database';
import { database } from './firebase';

export function getUsers(callback) {
    const usersRef = ref(database, '/users');
    get(usersRef).then((response) => {
        callback(response.val());
    });
}

export function saveKKMappings(mappings) {
    const mappingsRef = ref(database, 'mappings');
    set(mappingsRef, mappings);
}

export function saveUserWishlist(userName, wishlist) {
    const wishlistRef = ref(database, `/users/${userName}/wishlist`);
    set(wishlistRef, wishlist);
}

export function saveUserEmail(userName, email) {
    const emailRef = ref(database, `/users/${userName}/email`);
    set(emailRef, email);
}

export function getUserWishlist(userName, callback) {
    const wishlistRef = ref(database, `/users/${userName}/wishlist`);
    get(wishlistRef).then((response) => {
        callback(response.val());
    });
}
