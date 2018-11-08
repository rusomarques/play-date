import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Map } from '../map';

import './index.css';

export class component extends React.Component {
  static propTypes = {
    event: PropTypes.object,
    getSingleEvent: PropTypes.func
  };

  componentDidMount() {
    const eventId = this.props.match.params.id;
    this.props.getSingleEvent({ id: eventId });
  }

  render() {
    console.log('event', this.props.event);
    if (!this.props.event.title) {
      return 'No event...';
    }
    return (
      <div className="detail-component">
        <div className="event-listing">
          <h1>{this.props.event.title}</h1>

          <img src={this.props.event.image} alt="Event" />
          <h3>{this.props.event.location}</h3>
          <div className="date">
            <h3>
              {moment(this.props.event.date).format('dddd, MMMM Do YYYY')}
              <br />
              {moment(this.props.event.date).format('h:mm a')}
            </h3>
          </div>

          <h3>Age From: {this.props.event.ageFrom}</h3>
          <h3>Age To: {this.props.event.ageTo}</h3>

          <h3>Price: {this.props.event.price}</h3>
        </div>
        <div className="map">
          <Map events={[this.props.event]} />
        </div>
      </div>
    );
  }
}
