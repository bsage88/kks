import React, { useEffect } from 'react'; // eslint-disable-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './constants';
import Kks from './pages/Kks';
import ForgotPassword from './pages/ForgotPassword';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// import { generateKKMappings, generateWishlists } from './utils';

export default function App() {
    useEffect(() => {
        // generateKKMappings();
        // generateWishlists();
    }, []);

    return (
        <Router>
            <Switch>
                <Route exact={true} path={routes.home} component={Kks} />
                <Route
                    path={routes.forgotPassword}
                    component={ForgotPassword}
                />
                <Route path={routes.signIn} component={SignIn} />
                <Route path={routes.signUp} component={SignUp} />
            </Switch>
        </Router>
    );
}
