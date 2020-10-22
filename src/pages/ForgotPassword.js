import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doPasswordReset } from '../firebase/auth';
import { routes } from '../constants';
import useKeyPress from '../hooks/useKeyPress';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(null);

    useKeyPress(13, onReset);

    function onReset() {
        doPasswordReset(email)
            .then(() => {
                setError(null);
                setCompleted(true);
            })
            .catch((error) => {
                setError(error);
                setCompleted(false);
            });
    }

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2>RESET PASSWORD</h2>
                <label className="input-label">EMAIL</label>
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="text"
                    value={email}
                />
                <button
                    className="login-button"
                    onClick={onReset}
                    type="button"
                >
                    RESET
                </button>
                <Link className="signup-link" to={routes.signIn}>
                    LOG IN
                </Link>
                {completed && (
                    <p className="password-reset-success">
                        Password reset email sent. Follow the instructions, then
                        return to login page.
                    </p>
                )}
                {error && <p className="error">{error.message}</p>}
            </div>
        </div>
    );
}
