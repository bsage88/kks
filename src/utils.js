import _ from 'lodash';
import { users } from './constants';
import { saveKKMappings, saveWishlists } from './firebase/database';

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toggleMenu(event) {
    event.preventDefault();
    const kkList = document.getElementById('kkListContainer');
    kkList.classList.toggle('visible');
}

function getNameArray() {
    return _.map(users, 'name');
}

function getKKIndex(name, availableNames) {
    let kkIndex;
    let kkName = name;

    while (kkName === name) {
        kkIndex = _.random(availableNames.length - 1);
        kkName = availableNames[kkIndex];

        if (availableNames.length === 1 && kkName === name) {
            return null;
        }
    }

    return kkIndex;
}

function getKKMappings() {
    const names = getNameArray();
    let availableNames = getNameArray();
    let mappings = {};

    names.forEach((name) => {
        const kkIndex = getKKIndex(name, availableNames);
        if (kkIndex === null) {
            console.log('oops');
            return null;
        }

        mappings = { ...mappings, [name]: availableNames[kkIndex] };
        availableNames.splice(kkIndex, 1);
    });

    return mappings;
}

export function generateKKMappings() {
    let mappings;
    while (!mappings) {
        mappings = getKKMappings();
    }
    saveKKMappings(mappings);
}

export function generateWishlists() {
    const names = getNameArray();
    const wishlists = names.reduce(
        (results, name) => ({
            ...results,
            [name]: ['None'],
        }),
        {}
    );

    saveWishlists(wishlists);
}
