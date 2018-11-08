import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Map } from '../map';

import './index.css';

export class component extends React.Component {
  static propTypes = {
    event: PropTypes.shape({
      date: PropTypes.string,
      // location: PropTypes.string,
      title: PropTypes.string
    }),
    getSingleEvent: PropTypes.func
  };

  componentDidMount() {
    console.log(' this.props.match', this.props.match);

    const eventId = this.props.match.params.id;
    this.props.getSingleEvent({ id: eventId });
  }

  render() {
    return (
      <div className="detail-component">
        <div className="event-listing">
          <h1>{this.props.events.title}</h1>

          <img src={this.props.events.image} alt="Event" />
          <h3>{this.props.events.location}</h3>
          <div className="date">
            <h3>
              {moment(this.props.events.date).format('dddd, MMMM Do YYYY')}
              <br />
              {moment(this.props.events.date).format('h:mm a')}
            </h3>
          </div>

          <h3>Age From: {this.props.events.ageFrom}</h3>
          <h3>Age To: {this.props.events.ageTo}</h3>

          <h3>Price: {this.props.events.price}</h3>
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    );
  }
}
