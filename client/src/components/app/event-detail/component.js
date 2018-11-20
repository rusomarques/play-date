import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Map } from '../map';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FacebookProvider, Like } from 'react-facebook';

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
          <Card class="cadre">
            <FacebookProvider appId="352382042235453">
              <Like
                href="http://codeworks.me"
                colorScheme="dark"
                showFaces
                share
              />
            </FacebookProvider>
            <CardContent>
              <div className="event-listing">
                <img
                  src={this.props.event.image}
                  alt="Event"
                  style={{
                    maxWidth: '400px',
                    alignSelf: 'center'
                  }}
                />

                <h2 className="title-detail">{this.props.event.title}</h2>

                <div className="date-time">
                  <h3>
                    <i
                      className="fas fa-calendar-alt"
                      style={{
                        fontSize: '30px',
                        color: 'grey',
                        margin: '20px'
                      }}
                    />
                    {moment(this.props.event.eventdate).format(
                      'dddd, MMMM Do YYYY'
                    )}
                  </h3>
                  <h3>
                    <i
                      className="fas fa-clock"
                      style={{
                        fontSize: '30px',
                        color: 'grey',
                        margin: '20px'
                      }}
                    />
                    {moment(
                      this.props.event.eventdate +
                        ' ' +
                        this.props.event.eventtime
                    ).format('h:mm a')}
                  </h3>
                </div>
                <div className="age-price">
                  <i
                    className="fas fa-child"
                    style={{
                      fontSize: '30px',
                      color: 'grey',
                      margin: '20px'
                    }}
                  />
                  <h3>
                    Age From: {this.props.event.agefrom} -{' '}
                    {this.props.event.ageto}{' '}
                  </h3>
                </div>
                <div className="price">
                  <i
                    className="fas fa-euro-sign"
                    style={{
                      fontSize: '30px',
                      color: 'grey',
                      margin: '20px'
                    }}
                  />
                  {this.props.event.price === '0' ? (
                    <h3>Free</h3>
                  ) : (
                    <h3>{this.props.event.price} Euros</h3>
                  )}
                </div>

                <h3> {this.props.event.description}</h3>
              </div>
            </CardContent>
          </Card>
          <div className="map-cadre">
            <Card>
              <CardContent className="map-card">
                <div className="map-detail">
                  <Map events={[this.props.event]} />
                </div>
                <div className="location-details">
                  <div className="address">
                    <i
                      className="fas fa-map-marker-alt"
                      style={{
                        fontSize: '40px',
                        color: 'grey',
                        margin: '20px'
                      }}
                    />
                    {this.props.event.location}
                  </div>
                  <div className="website">
                    <i
                      className="fas fa-at"
                      style={{
                        fontSize: '40px',
                        color: 'grey',
                        margin: '20px'
                      }}
                    />
                    www.myplaydate.com
                  </div>

                  <div className="phone">
                    <i
                      className="fas fa-phone-square"
                      style={{
                        fontSize: '40px',
                        color: 'grey',
                        margin: '20px'
                      }}
                    />
                    +34 654 321 012
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
