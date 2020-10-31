import { useState, useEffect } from 'react';
import { getUsers } from '../firebase/database';

export default function useLoadUsers() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getUsers(setUsers);
    }, []);

    return users;
}
