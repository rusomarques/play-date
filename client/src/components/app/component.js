import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

import './index.css';
import { AddEvent } from './add-event';
import { AllEvents } from './all-events';
import { EventDetail } from './event-detail';
// import { Map } from './map';
import { NavBar } from './nav-bar';

export class component extends Component {
  static propTypes = {
    getEvents: PropTypes.func,
    createEvent: PropTypes.func,
    events: PropTypes.array
  };

  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="container">
          <Switch>
            <Route path="/create" component={AddEvent} />
            <Route path="/:id" component={EventDetail} />
            <Route path="/" component={AllEvents} />
          </Switch>
          {/* <div className="map">
            <Map />
          </div> */}
        </div>
      </div>
    );
  }
}
