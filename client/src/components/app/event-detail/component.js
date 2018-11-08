import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export class component extends React.Component {
  static propTypes = {
    event: PropTypes.shape({
      date: PropTypes.string,
      location: PropTypes.string,
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
      <div>
        <h1>{this.props.events.title}</h1>
        <h3>Recommended Age: {this.props.events.ageFrom}</h3>
        <h3>Price: {this.props.events.price}</h3>
        <h3>{this.props.events.location}</h3>
      </div>
    );
  }
}
