import React from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Spinner from 'react-icons/lib/fa/spinner';
import Feed from './Feed';
import About from './About';
import Contact from './Contact';
import Jumbotron from './Jumbotron';
import Navigation from './Navigation';

import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    name: 'Mustafa Al-Saegh',
    jumboTitle: 'Here is a list of sites you didnt know about!',
    feeds: []
  };

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyDwIKro685l9heIOZQ_aukSAUdml0W1TfM',
      authDomain: 'legacy2react.firebaseapp.com',
      databaseURL: 'https://legacy2react.firebaseio.com',
      projectId: 'legacy2react',
      storageBucket: 'legacy2react.appspot.com',
      messagingSenderId: '251746565216'
    };
    firebase.initializeApp(config);

    firebase
      .database()
      .ref(`/`)
      .on('value', snapshot => {
        this.setState({
          feeds: snapshot.val(),
          isLoading: false
        });
      });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Jumbotron title={this.state.jumboTitle} />
          {this.state.isLoading && (
            <center>
              <Spinner className="spin-it" size={30} />
              <br />
            </center>
          )}
          <Switch>
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route exact path='/' render={ () => (
              <Feed feeds={this.state.feeds} />
            )} />
          </Switch>

          <div className="footer">
            <p>&copy; {this.state.name}</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
