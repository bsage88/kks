import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { routes } from '../constants';

export default function SignUp({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    function onSignUp() {
        if (password !== confirmPassword) {
            setError({ message: 'Passwords do not match.' });
            return;
        }

        auth.doCreateUserWithEmailAndPassword(email, password)
            .then(() => history.push(routes.home))
            .catch((error) => setError(error));
    }

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2>REGISTER ACCOUNT</h2>
                <label className="input-label">EMAIL</label>
                <input
                    onChange={(event) =>
                        setEmail(event.target.value.toUpperCase())
                    }
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
