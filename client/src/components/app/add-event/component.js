import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import faker from 'faker';

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

  // handleClickButton = event => {
  //   event.preventDefault();
  //   this.createEvent();
  // };

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

          <input
            name="location"
            value={this.state.location}
            onChange={this.handleChangeInput}
            type="text"
            placeholder="Location"
          />
          <input
            name="description"
            value={this.state.description}
            onChange={this.handleChangeInput}
            type="text"
            placeholder="description"
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
