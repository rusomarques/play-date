import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import './index.css';

export class component extends React.Component {
  static propTypes = {
    event: PropTypes.shape({
      eventdate: PropTypes.string,
      eventtime: PropTypes.string,
      title: PropTypes.string,
      agefrom: PropTypes.number,
      ageto: PropTypes.number,
      price: PropTypes.price
    }),
    getEvents: PropTypes.func,
    history: PropTypes.object
  };

  handleClick = () => {
    this.props.history.push(`/${this.props.event.id}`);
  };

  render() {
    return (
      <Card>
        <CardActionArea>
          <div className="single-event" onClick={this.handleClick}>
            <CardContent>
              <img src={this.props.event.image} alt="event" />

              <div className="fields">
                <div className="title">
                  <h2>{this.props.event.title}</h2>
                </div>

                <div className="date">
                  <h3>
                    {moment(new Date(this.props.event.eventdate)).format(
                      'dddd, MMMM Do YYYY'
                    )}
                  </h3>
                </div>

                <div className="time">
                  <h3>{moment(this.props.event.eventtime).format('h:mm a')}</h3>
                </div>

                <div className="location">
                  <h3> {this.props.event.location}</h3>
                </div>

                <div className="agefrom">
                  <h3>
                    Age From: {this.props.event.agefrom} -{' '}
                    {this.props.event.ageto}
                  </h3>
                </div>

                {/* <div className="ageto">
                  <h3>Age To: {this.props.event.ageto}</h3>
                </div> */}

                <div className="price">
                  {this.props.event.price === '0' ? (
                    <h3>Price: Free</h3>
                  ) : (
                    <h3>Price: {this.props.event.price}</h3>
                  )}
                </div>
              </div>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>

      //   <div className="delete">
      //   <button onClick={() => this.deleteEvent()}>Delete</button>
      // </div>
    );
  }
}
