import { firebase } from './firebase';

export function saveKKMappings(mappings) {
  firebase
    .database
    .ref('mappings')
    .set(mappings);
}
