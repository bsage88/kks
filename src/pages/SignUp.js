import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { routes } from '../constants';
import useKeyPress from '../hooks/useKeyPress';
import useLoadUsers from '../hooks/useLoadUsers';
import { saveUserEmail } from '../firebase/database';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';

export default function SignUp({ history }) {
    const [userKey, setUserKey] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const users = useLoadUsers();
    useKeyPress(13, onSignUp);

    function onSignUp() {
        if (password !== confirmPassword) {
            setError({ message: 'Passwords do not match.' });
            return;
        }

        if (userKey === -1) {
            setError({ message: 'Must select a user.' });
            return;
        }

        doCreateUserWithEmailAndPassword(email, password)
            .then(() => {
                saveUserEmail(userKey, email);
                history.push(routes.home);
            })
            .catch((error) => setError(error));
    }

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2>REGISTER ACCOUNT</h2>
                <label className="input-label">WHO ARE YOU</label>
                <select
                    onChange={(event) => setUserKey(event.target.value)}
                    value={userKey}
                >
                    {!userKey && <option value="" />}
                    {_(users)
                        .pickBy((user) => !user.email)
                        .map((user, key) => (
                            <option key={key} value={key}>
                                {user.name}
                            </option>
                        ))
                        .value()}
                </select>
                <label className="input-label">EMAIL</label>
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="text"
                    value={email}
                />
                <label className="input-label">PASSWORD</label>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    value={password}
                />
                <label className="input-label">CONFIRM PASSWORD</label>
                <input
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    type="password"
                    value={confirmPassword}
                />
                <button
                    className="login-button"
                    disabled={!userKey}
                    onClick={onSignUp}
                    type="button"
                >
                    REGISTER
                </button>
                <Link className="signup-link" to={routes.signIn}>
                    GO BACK
                </Link>
                {error && <p className="error">{error.message}</p>}
            </div>
        </div>
    );
}
