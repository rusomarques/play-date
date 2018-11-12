import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import './index.css';

export class component extends Component {
  state = {
    eventdate: null,
    title: '',
    description: '',
    location: '',
    agefrom: '',
    ageto: '',
    price: '',
    searchText: '',
    free: '',
    age: '',
    error: null,
    checked: true
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
  // handleChangeFree = name => event => {
  //   this.setState({ [name]: event.target.checked });
  // };

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
      queryObject.eventdate = date.format('YYYY-MM-DD');
    }
    if (free) {
      queryObject.price = 0;
    }
    if (age || age === 0) {
      queryObject.agefrom = age;
    }
    if (searchText) {
      queryObject.q = searchText;
    }
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
          selected={this.props.date}
          onChange={this.handleChangeDate}
          dateFormat="DD/MM/YY"
        />

        <input
          value={this.props.age}
          onChange={this.handleFilterAge}
          type="text"
          placeholder="Filter by Age"
        />

        {/* <label for="test">Only Free Events</label>
        <label class="myCheckbox">
          <input type="checkbox" name="test"  checked={this.props.free}
            onChange={this.handleChangeFree}/>
          <span />
        </label> */}
        {/* <FormGroup> */}
        <FormControlLabel
          className="toggle"
          control={
            <Switch
              checked={this.props.checked}
              onChange={this.handleChangeFree}
              value="checked"
            />
          }
          label="Only Free Events"
        />
        {/* </FormGroup> */}
      </div>
    );
  }
}
