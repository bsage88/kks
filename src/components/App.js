import React, { useEffect } from 'react'; // eslint-disable-line
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from '../constants';
import Kks from './Kks';
import SignIn from './SignIn';
import { generateKKMappings, generateWishlists } from '../utils'; // eslint-disable-line

export default function App() {
    useEffect(() => {
        // generateKKMappings();
        // generateWishlists();
    }, []);

    return (
        <Router>
            <div>
                <Route exact path={routes.HOME} component={Kks} />
                <Route exact path={routes.SIGN_IN} component={SignIn} />
            </div>
        </Router>
    );
}
