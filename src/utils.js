import _ from 'lodash';
import { saveKKMappings } from './firebase/database';

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toggleMenu(event) {
    event.preventDefault();
    const kkList = document.getElementById('kkListContainer');
    kkList.classList.toggle('visible');
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

function getKKMappings(names) {
    let availableNames = [...names];
    let mappings = {};

    names.forEach((name) => {
        const kkIndex = getKKIndex(name, availableNames);
        if (kkIndex === null) {
            return null;
        }

        mappings = { ...mappings, [name]: availableNames[kkIndex] };
        availableNames.splice(kkIndex, 1);
    });

    return mappings;
}

function verifyMappings(names, mappings) {
    return names.every(
        (name) =>
            Object.keys(mappings).filter((x) => x === name).length === 1 &&
            _.values(mappings).filter((x) => x === name).length === 1
    );
}

export async function generateKKMappings(users) {
    const names = _.map(users, (user, name) => name);
    let mappings;

    while (!mappings || !verifyMappings(names, mappings)) {
        mappings = getKKMappings(names);
    }

    // console.log(mappings['brian']);
    saveKKMappings(mappings);
}
