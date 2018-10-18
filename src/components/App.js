import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { firebase } from '../firebase';
import { routes } from '../constants';
import Kks from './Kks';
import SignIn from './SignIn';
import { generateKKMappings } from '../utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });

    // generateKKMappings();
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path={routes.HOME} component={Kks} />
          <Route exact path={routes.SIGN_IN} component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
