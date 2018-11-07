import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

import './index.css';
import { AddEvent } from './add-event';
import { AllEvents } from './all-events';
import { EventDetail } from './event-detail';

export class component extends Component {
  static propTypes = {
    getEvents: PropTypes.func,
    createEvent: PropTypes.func,
    events: PropTypes.array
  };

  componentDidMount() {
    this.props.getEvents();
  }

  // componentDidReceiveProps() {}

  // handleChangeAge = event => {
  //   const age = event.target.value;
  //   this.props.setAge(age);
  //   if (age) {
  //     // this.props.getEvents({ ageFrom_lte: age });
  //     this.props.getEvents({ ageFrom: age });
  //   } else {
  //     this.props.getEvents();
  //   }
  // };

  render() {
    if (!this.props.events) {
      return 'loading....';
    }
    return (
      <div className="App">
        <Switch>
          <Route path="/create" component={AddEvent} />
          <Route path="/:id" component={EventDetail} />
          <Route path="/" component={AllEvents} />
        </Switch>
      </div>
    );
  }
}
