import React from 'react';

import { Event } from '../event';
import './index.css';

export class component extends React.Component {
  render() {
    return (
      <div className="events-list">
        {this.props.events.map(event => (
          <Event key={event.id} event={event.title} />
        ))}
      </div>
    );
  }
}
