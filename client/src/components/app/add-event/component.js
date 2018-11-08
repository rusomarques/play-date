/*global google*/
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
// import faker from 'faker';
import Geosuggest from 'react-geosuggest';

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
    location: { lat: null, lng: null },
    ageFrom: '',
    ageTo: '',
    price: '',
    error: null
  };

  handleChange = date => {
    this.setState({ date: date });
  };

  // onSuggestChange = something => {
  //   console.log(something, 'something');
  // };

  onSuggestSelect = place => {
    const { lat, lng } = place.location;
    console.log(place, 'place');
    const location = { lat, lng };
    this.setState({ location: place.gmaps.formatted_address });
  };

  handleChangeInput = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.props
      .createEvent({
        title: this.state.title,
        description: this.state.description,
        date: this.state.date,
        ageFrom: this.state.ageFrom,
        ageTo: this.state.ageTo,
        price: this.state.price,
        location: this.state.location
      })
      .then(() => {
        this.props.getEvents();
        this.setState({
          title: '',
          location: { lat: null, lng: null },
          date: moment(),
          description: '',
          ageFrom: '',
          ageTo: '',
          price: '',
          error: null
        });
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
            placeholder="Address"
            location={new google.maps.LatLng(41.3851, 2.1734)}
            // onChange={this.onSuggestChange}
            onSuggestSelect={this.onSuggestSelect}
            radius={20}
          />

          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChangeInput}
            type="text"
            placeholder="Description"
          />
          <input
            name="price"
            value={this.state.price}
            onChange={this.handleChangeInput}
            type="text"
            placeholder="Price"
          />
          <input
            name="ageFrom"
            value={this.state.ageFrom}
            onChange={this.handleChangeInput}
            type="text"
            placeholder="Age From"
          />
          <input
            name="ageTo"
            value={this.state.ageTO}
            onChange={this.handleChangeInput}
            type="text"
            placeholder="Age To"
          />
          <button className="button">Add</button>
        </form>
        {this.state.error && (
          <p className="error-message">{this.state.error}</p>
        )}
      </div>
    );
  }
}
