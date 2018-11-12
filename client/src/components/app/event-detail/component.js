import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Map } from '../map';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
      <div className="detail-component">
        <div>
          <div className="map">
            <Map events={[this.props.event]} />
          </div>
          <Card>
            <div className="event-listing">
              <CardContent>
                <h1>{this.props.event.title}</h1>

                <img src={this.props.event.image} alt="Event" />
                <h3>{this.props.event.location}</h3>
                <div className="date">
                  <h3>
                    {moment(this.props.event.eventdate).format(
                      'dddd, MMMM Do YYYY'
                    )}
                    {/* {moment(new Date(this.props.event.eventdate)).format(
                      'dddd, MMMM Do YYYY'
                    )} */}
                  </h3>
                </div>

                <div className="time">
                  <h3>
                    {moment(
                      this.props.event.eventdate +
                        ' ' +
                        this.props.event.eventtime
                    ).format('h:mm a')}
                  </h3>
                </div>
                {/* <div className="date">
                  <h3>
                    {moment(this.props.event.eventdate).format(
                      'dddd, MMMM Do YYYY'
                    )}
                    <br />
                    {moment(this.props.event.eventtime).format('h:mm a')}
                  </h3>
                </div> */}

                <h3>Age From: {this.props.event.agefrom}</h3>
                <h3>Age To: {this.props.event.ageto}</h3>

                <h3>Price: {this.props.event.price}</h3>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
