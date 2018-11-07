import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';
import { EventsList } from '../events-list';

export class component extends Component {
  static propTypes = {
    getEvents: PropTypes.func,
    createEvent: PropTypes.func,
    events: PropTypes.array
  };

  componentDidMount() {
    this.props.getEvents();
  }

  handleFilterAge = event => {
    const age = event.target.value;
    this.props.setAge(age);
    if (age) {
      // this.props.getEvents({ ageFrom_lte: age });
      this.props.getEvents({ ageFrom: age });
    } else {
      this.props.getEvents();
    }
  };

  render() {
    if (!this.props.events) {
      return 'loading....';
    }
    return (
      <div>
        <input value={this.props.age} onChange={this.handleFilterAge} />
        <EventsList events={this.props.events} />
      </div>
    );
  }
}
