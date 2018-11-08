import React from 'react';
import { connect } from 'react-redux';
import { Map } from '../map';

import { EventItem } from '../event-item';
import './index.css';

export class component extends React.Component {
  render() {
    return (
      <div className="events-container">
        <div className="events-list">
          {this.props.events.map(event => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
        <div className="map">
          <Map events={this.props.events} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

export default connect(
  mapStateToProps,
  null
)(component);
