import React from 'react';

const Navigation = props => (
  <div className="header">
    <ul className="nav nav-pills pull-right">
      <li className="active">
        <a href="#/home">Home</a>
      </li>
      <li>
        <a href="#/about">About</a>
      </li>
      <li>
        <a href="#/contact">Contact</a>
      </li>
    </ul>
    <h3 className="text-muted">Legacy to ReactApp</h3>
  </div>
);

export default Navigation;
