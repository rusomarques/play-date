import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import { Link } from 'react-router-dom';

import './index.css';

export class component extends React.Component {
  state = {
    activeId: null
  };

  handleMarkerClick = el => () => {
    console.log('event', el);
    this.setState({ activeId: el.id });
  };

  handleCloseInfoBox = () => {
    console.log('handleCloseInfoBox');
    this.setState({ activeId: null });
  };

  render() {
    const { events } = this.props;

    if (!events || events.length === 0) {
      return 'No events';
    }
    const GoogleMapExample = withGoogleMap(props => {
      const barcelonaCoords = { lat: 41.3851, lng: 2.1734 };
      const defaultCenter =
        events.length === 1
          ? { lat: events[0].coords[0], lng: events[0].coords[1] }
          : barcelonaCoords;
      return (
        <GoogleMap defaultZoom={13} defaultCenter={defaultCenter}>
          {events.map(el => {
            return (
              <Marker
                key={el.id}
                position={{ lat: el.coords[0], lng: el.coords[1] }}
                onClick={this.handleMarkerClick(el)}
              >
                {this.state.activeId === el.id && (
                  // <InfoBox onCloseClick={this.handleCloseInfoBox}>
                  <InfoBox
                    options={{ closeBoxURL: ``, enableEventPropagation: true }}
                    onCloseClick={() => console.log('close!')}
                  >
                    <div
                      style={{
                        backgroundColor: `lightgrey`,
                        opacity: 0.75,
                        padding: `12px`
                      }}
                    >
                      <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                        <Link to={`/${el.id}`}>{el.title}</Link>
                      </div>
                    </div>
                  </InfoBox>
                )}
              </Marker>
            );
          })}
        </GoogleMap>
      );
    });
    return (
      <div>
        <GoogleMapExample
          containerElement={
            <div
              style={{
                height: `400px`,
                width: this.props.fullWidth ? '100%' : '500px'
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
