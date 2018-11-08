import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { redux } from '../../../redux';
import { component } from './component';

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

export const container = withRouter(
  connect(
    null,
    mapDispatchToProps
  )(component)
);
