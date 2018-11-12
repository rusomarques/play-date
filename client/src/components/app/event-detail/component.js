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
    if (!this.props.event.title) {
      return 'No event...';
    }
    return (
      <div>
        <div className="detail-component">
          <div>
            <div className="event-listing">
              <img src={this.props.event.image} alt="Event" />

              <h1 className="title-detail">{this.props.event.title}</h1>

              <div className="date">
                <h3>
                  {moment(this.props.event.eventdate).format(
                    'dddd, MMMM Do YYYY'
                  )}
                </h3>
              </div>

              <div className="time">
                <h3>
                  Time:
                  {moment(
                    this.props.event.eventdate +
                      ' ' +
                      this.props.event.eventtime
                  ).format('h:mm a')}
                </h3>
              </div>

              <h3> Description: {this.props.event.description}</h3>

              <h3>Age From: {this.props.event.agefrom}</h3>
              <h3>Age To: {this.props.event.ageto}</h3>

              <h3>Price: {this.props.event.price} Euros</h3>
            </div>
          </div>
          <div className="map">
            <Map events={[this.props.event]} />
            <h3>{this.props.event.location}</h3>

            <div classname="website">
              <i
                class="fas fa-at"
                style={{
                  fontSize: '40px',
                  color: 'grey',
                  cursor: 'pointer',
                  margin: '20px'
                }}
              />
              www.myplaydate.com
            </div>

            <div className="phone">
              <i
                class="fas fa-phone-square"
                style={{
                  fontSize: '40px',
                  color: 'grey',
                  cursor: 'pointer',
                  margin: '20px'
                }}
              />
              +34 654 321 012
            </div>
          </div>
        </div>
      </div>
    );
  }
}
