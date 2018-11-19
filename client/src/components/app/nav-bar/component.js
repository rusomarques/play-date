import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import './index.css';

export class component extends Component {
  state = {
    eventdate: moment(),
    title: '',
    description: '',
    location: '',
    agefrom: '',
    ageto: '',
    price: '',
    error: null
  };

  handleChange = eventdate => {
    this.setState({ eventdate: eventdate });
  };

  handleChangeInput = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFilterAge = event => {
    const age = event.target.value;
    this.props.setAge(age);
    if (age) {
      this.props.getEvents({ agefrom: age });
    } else {
      this.props.getEvents();
    }
  };

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-area">
          <Link to="/">
            {/* <img
              src="https://res.cloudinary.com/cjrrcrosr/image/upload/c_scale,w_200/v1541859967/play.png"
              alt="logo"
            /> */}
            <h1>Play Dates</h1>
          </Link>
        </div>
        {
          // <div className="nav-area">
          //   <div className="nav-links">
          //     <Link to="/create">
          //       <Tooltip title="Add">
          //         <Button variant="fab" aria-label="Add">
          //           <AddIcon />
          //         </Button>
          //       </Tooltip>
          //     </Link>
          //   </div>
          // </div>
        }
      </div>
    );
  }
}
