import React from 'react';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Feed from './Feed';

import data from '../data/data.json';

import './App.css';

class App extends React.Component {
  state = {
    name: 'Mustafa Al-Saegh',
    jumboTitle: 'List of Courses',
    feeds: data
  };

  render() {
    return (
      <div className="container">
        <Navigation />
        <Jumbotron title={this.state.jumboTitle} />
        <Feed feeds={this.state.feeds} />
        <div className="footer">
          <p>&copy; {this.state.name}</p>
        </div>
      </div>
    );
  }
}

export default App;
