import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export class component extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="logo-area">
          <Link to="/">
            <h1>Kids Events</h1>
          </Link>
        </div>
        <div className="nav-area">
          <div className="nav-links">
            <Link to="/create">
              <button className="navbar-button">ADD AN EVENT</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
