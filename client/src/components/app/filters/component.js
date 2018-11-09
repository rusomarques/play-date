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
    free: '',
    age: '',
    error: null
  };

  handleChangeDate = date => {
    this.props.setDate(date);
  };

  handleChangeInput = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFilterAge = event => {
    const age = event.target.value;
    console.log('handleFilterAge', age);
    this.props.setAge(age);
  };

  handleChangeFree = event => {
    const checked = event.target.checked;
    console.log('handleChangeFree', checked);
    this.props.setFree(checked);
  };

  componentDidUpdate(prevProps) {
    const { age, free, date } = this.props;
    if (
      age === prevProps.age &&
      free === prevProps.free &&
      date === prevProps.date
    ) {
      return;
    }
    const queryObject = {};
    if (date) {
      queryObject.date = date.format('YYYY-MM-DD');
    }
    if (free) {
      queryObject.price = 0;
    }
    if (age || age === 0) {
      queryObject.ageFrom = age;
    }
    // if (age) {
    //   queryObject.q = age;
    // }
    console.log('queryObject', queryObject);
    this.props.getEvents(queryObject);
  }

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
          // selected={this.props.date}
          onChange={this.handleChangeDate}
          dateFormat="DD/MM/YY"
        />

        <input
          value={this.props.age}
          onChange={this.handleFilterAge}
          type="text"
          placeholder="Filter by Age"
        />
        <label>
          <input
            type="checkbox"
            checked={this.props.free}
            onChange={this.handleChangeFree}
          />
          Free
        </label>
      </div>
    );
  }
}
