import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { EventItem } from '../event-item';

export class component extends Component {
  state = {
    date: moment(),
    title: '',
    description: '',
    location: '',
    ageFrom: '',
    ageTo: '',
    price: '',
    search: '',
    error: null
  };

  handleChange = date => {
    this.setState({ date: date });
  };

  handleChangeInput = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFilterAge = event => {
    const age = event.target.value;
    this.props.setAge(age);
    if (age) {
      // this.props.getEvents({ ageFrom_lte: age });
      this.props.getEvents({ ageFrom: age });
    } else {
      this.props.getEvents();
    }
  };

  handleFreeEvents = event => {
    const free = event.target.value;
    this.props.filterPrice(free);
    if (free) {
      this.props.getEvents({ price: free });
    } else {
      this.props.getEvents();
    }
  };

  // handleSearch = event => {
  //   this.setState({ search: event.target.value });
  // };

  render() {
    // let filteredEvents = this.props.events.filter(event => {
    //   return event.title.indexOf(this.state.search) !== -1;
    // });
    return (
      <div className="filter-container">
        {/* <ul>
          {filteredEvents.map(event => {
            return <EventItem key={event.id} event={event} />;
          })}
        </ul> */}
        <input
          className="search-field"
          placeholder="Search a play date..."
          type="text"
          value={this.state.search}
          onChange={this.handleSeach}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              console.log('clicked');
            }
          }}
        />

        <DatePicker
          className="datePicker"
          selected={this.state.date}
          onChange={this.handleChange}
          showTimeSelect
          dateFormat="LLL"
        />

        <input
          value={this.props.age}
          onChange={this.handleFilterAge}
          type="text"
          placeholder="Filter by Age"
        />

        <input
          value={this.props.free}
          onChange={this.handleFreeEvents}
          type="text"
          placeholder="Filter by Price"
        />
      </div>
    );
  }
}
