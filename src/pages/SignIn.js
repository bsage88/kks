import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firebase, auth } from '../firebase';
import { routes } from '../constants';

export default function SignIn({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                history.push(routes.home);
            }
        });
    }, []);

    function onSignUp() {
        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => history.push(routes.home))
            .catch((error) => setError(error));
    }

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2>ACCOUNT LOGIN</h2>
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
                <Link className="forgot-password" to={routes.forgotPassword}>
                    FORGOT PASSWORD
                </Link>
                <button
                    className="login-button"
                    onClick={onSignUp}
                    type="button"
                >
                    LOG IN
                </button>
                <Link className="signup-link" to={routes.signUp}>
                    SIGN UP
                </Link>
                {error && <p className="error">{error.message}</p>}
            </div>
        </div>
    );
}
