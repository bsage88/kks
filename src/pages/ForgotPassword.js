import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { routes } from '../constants';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(null);

    function onReset() {
        auth.doPasswordReset(email)
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
                    onChange={(event) =>
                        setEmail(event.target.value.toUpperCase())
                    }
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
