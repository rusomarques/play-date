import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import './index.css';

export class component extends React.Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 41.3851, lng: 2.1734 }}
        defaultZoom={13}
      />
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
