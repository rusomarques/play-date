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

  render() {
    if (!this.props.events) {
      return 'loading....';
    }
    return (
      <div>
        <h3>All Events</h3>
        {/* <input value={this.props.age} onChange={this.handleChangeAge} /> */}
        {console.log('evvvvents', this.props.events)}
        <EventsList events={this.props.events} />
      </div>
    );
  }
}
