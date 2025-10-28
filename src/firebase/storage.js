import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export function getProfilePictures(callback) {
    const profilePicturesRef = ref(storage, 'profilePictures');

    listAll(profilePicturesRef).then((result) =>
        Promise.all(
            result.items.map((imageRef) =>
                getDownloadURL(imageRef).then((url) => ({
                    name: imageRef.name,
                    url,
                }))
            )
        ).then(callback)
    );
}
