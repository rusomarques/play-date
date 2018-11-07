import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';
import { AddEvent } from './add-event';
import { EventsList } from './events-list';

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
  //   // not the best way
  //   if (age) {
  //     // this.props.getEvents({ ageFrom_lte: age });
  //     this.props.getEvents({ ageFrom: age });
  //   } else {
  //     this.props.getEvents();
  //   }
  // };

  render() {
    return (
      // <Route path="/" component={Events}/>
      // <Route path="/:id" component={EventDetail}/>
      <div className="App">
        <div>
          <AddEvent />
          <h3>Upcoming Events</h3>
          {/* <input value={this.props.age} onChange={this.handleChangeAge} /> */}
          {console.log('evvvvents', this.props.events)}
          <EventsList events={this.props.events} />
        </div>
      </div>
    );
  }
}
