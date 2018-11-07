import { connect } from 'react-redux';
import { redux } from '../../../redux';

import { component } from './component';

const mapStateToProps = state => {
  return {
    events: state.getEvents.data.data
  };
};

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
  mapStateToProps,
  mapDispatchToProps
)(component);
