/*global google*/
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import faker from 'faker';
import Geosuggest, { Suggest } from 'react-geosuggest';

import './index.css';

export class component extends React.Component {
  static propTypes = {
    getEvents: PropTypes.func,
    createEvent: PropTypes.func
  };

  state = {
    date: moment(),
    title: '',
    description: '',
    location: '',
    ageFrom: '',
    ageTo: '',
    price: '',
    error: null
  };

  handleChange = date => {
    this.setState({ date: date });
  };

  onSuggestSelect = (place: Suggest) => {};

  handleChangeInput = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.props
      .createEvent({
        title: faker.random.words(),
        description: 'Super duper awesome party, great presents.',
        location: {
          lat: faker.address.latitude(),
          lng: faker.address.longitude()
        },
        datetime: '2018-12-20 16:00:00',
        ageFrom: 2,
        ageTo: 4,
        price: 5
      })
      .then(() => {
        this.props.getEvents();
      });
  };

  render() {
    return (
      <div className="add-event">
        <h1>Add an event</h1>
        <form onSubmit={this.handleSubmitForm} className="form">
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChangeInput}
            type="text"
            placeholder="Title"
          />

          <DatePicker
            className="datePicker"
            selected={this.state.date}
            onChange={this.handleChange}
            showTimeSelect
            dateFormat="LLL"
          />
          <Geosuggest
            // className="geoSuggest"
            placeholder="Start typing!"
            onSuggestSelect={this.onSuggestSelect}
            location={new google.maps.LatLng(53.558572, 9.9278215)}
            radius={20}
          />

          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChangeInput}
            type="text"
            placeholder="description"
          />
          <input
            name="price"
            value={this.state.price}
            onChange={this.handleChangeInput}
            type="text"
            placeholder="price"
          />
          <input
            name="ageFrom"
            value={this.state.ageFrom}
            onChange={this.handleChangeInput}
            type="text"
            placeholder="ageFrom"
          />
          <input
            name="ageTo"
            value={this.state.ageTO}
            onChange={this.handleChangeInput}
            type="text"
            placeholder="ageTo"
          />
          <button className="button">Create</button>
        </form>
        {this.state.error && (
          <p className="error-message">{this.state.error}</p>
        )}
      </div>
    );
  }
}
