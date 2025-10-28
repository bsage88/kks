import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { routes } from '../constants';
import useKeyPress from '../hooks/useKeyPress';
import useAutoAuthentication from '../hooks/useAutoAuthentication';
import { doSignInWithEmailAndPassword } from '../firebase/auth';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useKeyPress(13, onSignIn);
    useAutoAuthentication(() => navigate(routes.home));

    function onSignIn() {
        doSignInWithEmailAndPassword(email, password)
            .then(() => navigate(routes.home))
            .catch((error) => setError(error));
    }

    if (auth.currentUser) {
        return null;
    }

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2>ACCOUNT LOGIN</h2>
                <label htmlFor="email-address" className="input-label">
                    EMAIL
                </label>
                <input
                    id="email-address"
                    name="email-address"
                    autoComplete="email-address"
                    onChange={(event) => setEmail(event.target.value)}
                    type="text"
                    value={email}
                />
                <label htmlFor="password" className="input-label">
                    PASSWORD
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                />
                <Link className="forgot-password" to={routes.forgotPassword}>
                    FORGOT PASSWORD
                </Link>
                <button
                    className="login-button"
                    onClick={onSignIn}
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
