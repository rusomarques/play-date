import { connect } from 'react-redux';

import { component } from './component';
import { redux } from '../../redux';

const mapStateToProps = state => ({
  events: state.getEvents.data.data || []
  // age: state.filters.age
});
const mapDispatchToProps = dispatch => ({
  getEvents: params => {
    return dispatch(redux.rest.actions.getEvents(params));
  }
  // setAge: age => {
  //   return dispatch(redux.filters.actionCreators.setAge(age));
  // }
});

export const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
