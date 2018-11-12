/*global google*/
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Geosuggest from 'react-geosuggest';

import './index.css';

export class component extends React.Component {
  static propTypes = {
    getEvents: PropTypes.func,
    createEvent: PropTypes.func
  };

  state = {
    eventdate: null,
    eventtime: null,
    title: '',
    description: '',
    location: '',
    coords: { lat: null, lng: null },
    agefrom: '',
    ageto: '',
    price: '',
    image:
      'https://res.cloudinary.com/cjrrcrosr/image/upload/c_scale,h_200,w_300/v1541859967/play.png',
    error: null
  };

  handleChangeDate = eventdate => {
    this.setState({ eventdate: eventdate });
  };

  handleChangeTime = eventtime => {
    this.setState({ eventtime: eventtime });
  };

  handleSuggestSelect = place => {
    const { lat, lng } = place.location;
    this.setState({
      location: place.gmaps.formatted_address,
      coords: [lat, lng]
    });
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
        eventdate: this.state.eventdate,
        eventtime: this.state.eventtime,
        agefrom: this.state.agefrom,
        ageto: this.state.ageto,
        price: this.state.price,
        location: this.state.location,
        coords: this.state.coords,
        image: this.state.image
      })
      .then(() => {
        this.props.getEvents();
        this.props.history.push('/');
      });
  };

  handleUploadWidget = event => {
    event.preventDefault();
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'cjrrcrosr',
        upload_preset: 'k9f6baa7',
        cropping: true,
        folder: 'photos'
      },
      (error, result) => {
        if (result.info.url) {
          this.setState({ image: result.info.url });
        }
      }
    );
  };

  render() {
    return (
      <div className="add-event">
        <form onSubmit={this.handleSubmitForm} className="form">
          <button onClick={this.handleUploadWidget} className="upload-button">
            Add Image
          </button>

          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChangeInput}
            type="text"
            placeholder="Title"
          />

          <DatePicker
            className="datePicker"
            placeholderText="Date"
            selected={this.state.eventdate}
            onChange={this.handleChangeDate}
            dateFormat="DD/MM/YY"
          />

          <DatePicker
            placeholderText="Time"
            selected={this.state.eventtime}
            onChange={this.handleChangeTime}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="LT"
            timeCaption="Time"
          />

          <Geosuggest
            placeholder="Address"
            location={new google.maps.LatLng(41.3851, 2.1734)}
            onSuggestSelect={this.handleSuggestSelect}
            radius={20}
          />

          <textarea
            rows="4"
            cols="50"
            name="description"
            value={this.state.description}
            onChange={this.handleChangeInput}
            type="text-box"
            placeholder="Description"
          />
          <input
            name="price"
            value={this.state.price}
            onChange={this.handleChangeInput}
            type="number"
            placeholder="Price €"
          />
          <input
            name="agefrom"
            value={this.state.agefrom}
            onChange={this.handleChangeInput}
            type="number"
            placeholder="Age From"
          />
          <input
            name="ageto"
            value={this.state.ageto}
            onChange={this.handleChangeInput}
            type="number"
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
