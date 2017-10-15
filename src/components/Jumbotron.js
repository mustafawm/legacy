import React from 'react';
import { string } from 'prop-types';

const Jumbotron = ({ title }) => (
  <div className="jumbotron">
    <h1>Yo VanillaJS</h1>
    <p className="lead">{title}</p>
    <p>
      <a className="btn btn-lg btn-success" href="#/home">
        Hello world
      </a>
    </p>
  </div>
);


Jumbotron.propTypes = {
  title: string.isRequired
};

export default Jumbotron;
