import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import './index.css';
import { AddEvent } from './add-event';
import { AllEvents } from './all-events';
import { EventDetail } from './event-detail';
import { NavBar } from './nav-bar';
import { Auth } from './auth';

export class component extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <NavBar />
        </div>
        <div>
          <Auth />
        </div>

        <div className="container">
          <Switch>
            <Route path="/create" component={AddEvent} />
            <Route path="/:id" component={EventDetail} />
            <Route path="/" component={AllEvents} />
          </Switch>
        </div>
      </div>
    );
  }
}
