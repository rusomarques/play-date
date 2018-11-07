import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';

import { component } from './component';
import { redux } from '../../../redux';

const mapDispatchToProps = dispatch => ({
  createEvent: event => {
    return dispatch(
      redux.rest.actions.createEvent({}, { body: JSON.stringify(event) })
    );
  },
  getEvents: params => {
    return dispatch(redux.rest.actions.getEvents(params));
  }
});

export const container = connect(
  null,
  mapDispatchToProps
)(component);
