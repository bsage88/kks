import { useState, useEffect } from 'react';
import { getProfilePictures } from '../firebase/storage';

export default function useLoadProfilePictures() {
    const [profilePictures, setProfilePictures] = useState(null);

    useEffect(() => {
        getProfilePictures(setProfilePictures);
    }, []);

    return profilePictures;
}
