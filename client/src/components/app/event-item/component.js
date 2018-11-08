import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './index.css';

export class component extends React.Component {
  static propTypes = {
    event: PropTypes.shape({
      date: PropTypes.string,
      // location: PropTypes.string,
      title: PropTypes.string
    }),
    getEvents: PropTypes.func
  };

  render() {
    return (
      <div className="single-event">
        <img src={this.props.event.image} alt="Event" />
        <div className="fields">
          <div className="title">
            <h2>{this.props.event.title}</h2>
          </div>

          <div className="date">
            <h3>
              {moment(this.props.event.date).format('dddd, MMMM Do YYYY')}
              <br />
              {moment(this.props.event.date).format('h:mm a')}
            </h3>
          </div>

          <div className="location">
            <h3> {this.props.event.location}</h3>
          </div>

          <div className="ageFrom">
            <h3>Age From: {this.props.event.ageFrom}</h3>
          </div>

          <div className="ageTo">
            <h3>Age To: {this.props.event.ageTo}</h3>
          </div>

          <div className="price">
            <h3>Price: {this.props.event.price}</h3>
          </div>
        </div>
      </div>

      //   <div className="delete">
      //   <button onClick={() => this.deleteEvent()}>Delete</button>
      // </div>
    );
  }
}
