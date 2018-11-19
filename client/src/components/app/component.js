import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import './index.css';
import { AddEvent } from './add-event';
import { AllEvents } from './all-events';
import { EventDetail } from './event-detail';
import { NavBar } from './nav-bar';
import { Auth } from './auth';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

export class component extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <NavBar />

          <Auth />

          <div className="nav-links">
            <Link to="/create">
              <Tooltip title="Add">
                <Button variant="fab" aria-label="Add">
                  <AddIcon />
                </Button>
              </Tooltip>
            </Link>
          </div>
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
