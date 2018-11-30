import React, { Component } from 'react';
import KkList from './KkList';
import Overlay from './Overlay';
import SnowFlakes from './SnowFlakes';
import { toggleMenu, toggleOverlay, capitalizeFirstLetter } from '../utils';
import { firebase } from '../firebase';
import '../css/kks.css';

class Kks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchedKK: null
    };
  }

  componentDidMount() {
    if (firebase.auth.currentUser) {
      const userName = capitalizeFirstLetter(
        firebase.auth.currentUser.email.split('@')[0]
      );

      firebase.database
        .ref('/mappings/' + userName)
        .once('value')
        .then(matchedKKSnapshot => {
          this.setState({ matchedKK: matchedKKSnapshot.val() });
        });
    }
  }

  render() {
    if (!firebase.auth.currentUser || !this.state.matchedKK) {
      return (
        <a
          className="login-message"
          href="http://christmas-kks.firebaseapp.com"
        >
          Go to sign in page: http://christmas-kks.firebaseapp.com
        </a>
      );
    }

    return (
      <div className="kk-container">
        <div className="menu-container">
          <button className="expand-menu" onClick={toggleMenu}>
            <i className="fas fa-bars" />
          </button>
        </div>
        <KkList />
        <div className="kk-button-container">
          <button className="kk-button" onClick={toggleOverlay}>
            Show your KK
          </button>
        </div>
        <Overlay name={this.state.matchedKK} />
        <SnowFlakes />
      </div>
    );
  }
}
export default Kks;
