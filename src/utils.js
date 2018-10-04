import React from 'react';
import _ from 'lodash';
import KkName from './components/KkName';
import { profilePictures } from './constants';
import { saveKKMappings } from './database';

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toggleMenu(event) {
  event.preventDefault();
  const kkList = document.getElementById('kkListContainer');
  kkList.classList.toggle('visible');
}

export function toggleOverlay(event) {
  event.preventDefault();
  const overlay = document.getElementById('overlay');
  overlay.classList.toggle('visible');
}

export function getNameList() {
  return _.map(profilePictures, (value, key) => (
    <KkName name={key} picture={value} />
  ));
}

function getNameArray() {
  return _.map(profilePictures, (value, key) => key);
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

  names.forEach(name => {
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

function generateKKMappings() {
  let mappings;
  while (!mappings) {
    mappings = getKKMappings();
  }
  saveKKMappings(mappings);
}
