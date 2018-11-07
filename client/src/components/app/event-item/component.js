import React from 'react';
import PropTypes from 'prop-types';
// import moment from 'moment';

import './index.css';

export class component extends React.Component {
  static propTypes = {
    event: PropTypes.shape({
      date: PropTypes.string,
      location: PropTypes.string,
      title: PropTypes.string
    }),
    getEvents: PropTypes.func
  };

  render() {
    return (
      <div className="single-event">
        <div className="title">
          {console.log('event item', this.props.event)}
          <h3>{this.props.event.title}</h3>
        </div>
        <div className="ageFrom">
          <h3>Age From: {this.props.event.ageFrom}</h3>
        </div>
        {/* <div className="dateTime">
          <h4>
            {moment(this.props.event.date).format('dddd, MMMM Do YYYY')}
            <br />
            {moment(this.props.event.date).format('h:mm a')}
          </h4>
        </div> */}
        {/* <div className="delete">
        <button onClick={() => this.deleteEvent()}>Delete</button>
      </div> */}
      </div>
    );
  }
}
