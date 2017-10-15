import React from 'react';
import firebase from 'firebase';
import Spinner from 'react-icons/lib/fa/spinner';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Feed from './Feed';

import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    name: 'Mustafa Al-Saegh',
    jumboTitle: 'List of Sites',
    feeds: []
  };

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDwIKro685l9heIOZQ_aukSAUdml0W1TfM",
      authDomain: "legacy2react.firebaseapp.com",
      databaseURL: "https://legacy2react.firebaseio.com",
      projectId: "legacy2react",
      storageBucket: "legacy2react.appspot.com",
      messagingSenderId: "251746565216"
    };
    firebase.initializeApp(config);

    firebase.database().ref(`/`).on('value', snapshot => {
      this.setState({
        feeds: snapshot.val(),
        isLoading: false
      });
    });
  }

  render() {
    return (
      <div className="container">
        <Navigation />
        <Jumbotron title={this.state.jumboTitle} />
        {this.state.isLoading &&
          <center>
            <Spinner className='spin-it' size={30} />
            <br />
          </center>
        }
        <Feed feeds={this.state.feeds} />
        <div className="footer">
          <p>&copy; {this.state.name}</p>
        </div>
      </div>
    );
  }
}

export default App;
