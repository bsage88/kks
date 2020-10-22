import { useState, useEffect } from 'react';
import { getProfilePictures } from '../firebase/storage';

export default function useLoadProfilePictures() {
    const [profilePictures, setProfilePictures] = useState(null);

    useEffect(() => {
        getProfilePictures((pictures) => {
            const picturesObject = pictures.reduce((result, picture) => {
                const name = picture.name.split('.')[0];

                return {
                    ...result,
                    [name]: picture,
                };
            }, {});

            setProfilePictures(picturesObject);
        });
    }, []);

    return profilePictures;
}
