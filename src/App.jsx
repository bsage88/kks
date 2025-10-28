import React from 'react'; // eslint-disable-line
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import { routes } from './constants';
import Kks from './pages/Kks';
import ForgotPassword from './pages/ForgotPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ManageWishlist from './pages/ManageWishlist';
import SnowFlakes from './components/SnowFlakes';

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={routes.home} element={<Kks />} />
                    <Route
                        path={routes.forgotPassword}
                        element={<ForgotPassword />}
                    />
                    <Route path={routes.signIn} element={<SignIn />} />
                    <Route path={routes.signUp} element={<SignUp />} />
                    <Route
                        path={routes.manageWishlist}
                        element={<ManageWishlist />}
                    />
                    <Route
                        path="/"
                        element={<Navigate to={routes.home} replace />}
                    />
                </Routes>
            </Router>
            <SnowFlakes />
        </>
    );
}
