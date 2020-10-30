import React from 'react'; // eslint-disable-line
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { routes } from './constants';
import Kks from './pages/Kks';
import ForgotPassword from './pages/ForgotPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ManageWishlist from './pages/ManageWishlist';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path={routes.home} component={Kks} />
                <Route
                    path={routes.forgotPassword}
                    component={ForgotPassword}
                />
                <Route path={routes.signIn} component={SignIn} />
                <Route path={routes.signUp} component={SignUp} />
                <Route
                    path={routes.manageWishlist}
                    component={ManageWishlist}
                />
                <Redirect exact={true} path="/" to={routes.home} />
            </Switch>
        </Router>
    );
}
