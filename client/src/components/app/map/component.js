import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import './index.css';

export class component extends React.Component {
  render() {
    console.log('cshjkdfhbsjdgfshd', this.props.events);

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap defaultZoom={13} defaultCenter={{ lat: 41.3851, lng: 2.1734 }}>
        {this.props.events.map(el => (
          <Marker position={{ lat: el.coords[0], lng: el.coords[1] }} />
        ))}
      </GoogleMap>
    ));
    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: '500px' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
