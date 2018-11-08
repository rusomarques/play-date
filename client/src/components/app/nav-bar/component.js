import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './index.css';

export class component extends Component {
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

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-area">
          <Link to="/">
            <h1>Play Dates</h1>
          </Link>
        </div>
        <div className="nav-area">
          <DatePicker
            className="datePicker"
            // placeholder="Pick a date"
            selected={this.state.date}
            onChange={this.handleChange}
            showTimeSelect
            dateFormat="LLL"
          />
          <div className="nav-links">
            <Link to="/create">
              <button className="navbar-button">ADD A PLAY DATE</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
