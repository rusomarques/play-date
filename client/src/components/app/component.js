import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import './index.css';
import { AddEvent } from './add-event';
import { AllEvents } from './all-events';
import { EventDetail } from './event-detail';
import { NavBar } from './nav-bar';
import { Auth } from './auth';
import { Redirect } from 'react-router-dom';
import { FacebookProvider } from 'react-facebook';
import { facebookToken } from '../../config';

export class component extends Component {
  state = {
    auth: false
  };

  handleAuth(boolean) {
    this.setState({
      auth: boolean
    });
  }

  render() {
    const auth = this.state.auth;
    return (
      <div className="App">
        <FacebookProvider appId={facebookToken}>
          <div className="nav-bar">
            <NavBar />

            <Auth onClick={boolean => this.handleAuth(boolean)} />
          </div>

          <div className="container">
            <Switch>
              <Route
                path="/create"
                render={() => (auth ? <AddEvent /> : <Redirect to="/" />)}
              />
              <Route path="/:id" render={() => <EventDetail auth={auth} />} />
              <Route path="/" render={() => <AllEvents auth={auth} />} />
            </Switch>
          </div>
        </FacebookProvider>
      </div>
    );
  }
}
