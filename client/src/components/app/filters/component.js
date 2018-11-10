import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export class component extends Component {
  state = {
    date: moment(),
    title: '',
    description: '',
    location: '',
    ageFrom: '',
    ageTo: '',
    price: '',
    searchText: '',
    free: '',
    age: '',
    error: null
  };

  handleChangeDate = date => {
    this.props.setDate(date);
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

  handleSearch = event => {
    const searchText = event.target.value;
    this.props.searchEvents(searchText);
  };

  componentDidUpdate(prevProps) {
    const { age, free, date, searchText } = this.props;
    if (
      age === prevProps.age &&
      free === prevProps.free &&
      date === prevProps.date &&
      searchText === prevProps.searchText
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
    if (searchText) {
      queryObject.q = searchText;
    }
    console.log('queryObject', queryObject);
    this.props.getEvents(queryObject);
  }

  render() {
    return (
      <div className="filter-container">
        <input
          className="search-field"
          placeholder="Search a play date..."
          type="text"
          value={this.props.searchText}
          onChange={this.handleSearch}
        />

        <DatePicker
          className="datePicker"
          placeholderText="Filter by date"
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
            label="free?"
            checked={this.props.free}
            onChange={this.handleChangeFree}
          />
          Free
        </label>
      </div>
    );
  }
}
