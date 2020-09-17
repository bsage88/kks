import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { routes } from '../constants';
import useKeyPress from '../hooks/useKeyPress';
import useAutoAuthentication from '../hooks/useAutoAuthentication';
import { doSignInWithEmailAndPassword } from '../firebase/auth';

export default function SignIn({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    useKeyPress(13, onSignIn);
    useAutoAuthentication(() => history.push(routes.home));

    function onSignIn() {
        doSignInWithEmailAndPassword(email, password)
            .then(() => history.push(routes.home))
            .catch((error) => setError(error));
    }

    if (auth.currentUser) {
        return null;
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
