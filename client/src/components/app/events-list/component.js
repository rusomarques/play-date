import React from 'react';
import { connect } from 'react-redux';
import { Map } from '../map';

import { EventItem } from '../event-item';
import './index.css';

export class component extends React.Component {
  render() {
    return (
      <div className="events-container">
        <div className="map">
          <Map events={this.props.events} fullWidth={true} />
        </div>
        <div className="events-list">
          {this.props.events.map(event => (
            <EventItem auth={this.props.auth} key={event.id} event={event} />
          ))}
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
