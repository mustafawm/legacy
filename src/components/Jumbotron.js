import React from 'react';
import { string } from 'prop-types';

const Jumbotron = ({ title }) => (
  <div className="jumbotron">
    <h1>Yo VanillaJS</h1>
    <h5> Hello there!</h5>
    <p className="lead">{title}</p>
  </div>
);


Jumbotron.propTypes = {
  title: string.isRequired
};

export default Jumbotron;
