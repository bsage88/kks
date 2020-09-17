import { storage } from './firebase';

export function getProfilePictures(callback) {
    var storageRef = storage.ref();
    const profilePicturesRef = storageRef.child('profilePictures');

    profilePicturesRef
        .listAll()
        .then((result) =>
            Promise.all(
                result.items.map((imageRef) =>
                    imageRef
                        .getDownloadURL()
                        .then((url) => ({ name: imageRef.name, url }))
                )
            ).then(callback)
        );
}
