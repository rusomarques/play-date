import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';
import { EventsList } from '../events-list';
import { Filters } from '../filters';

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
      <div className="wrapper">
        <div className="filters-bar">
          <Filters />
        </div>
        <EventsList auth={this.props.auth} events={this.props.events} />
      </div>
    );
  }
}
