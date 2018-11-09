import { connect } from 'react-redux';

import { component } from './component';
import { redux } from '../../../redux';

const mapStateToProps = state => ({
  events: state.getEvents.data.data || []
});
const mapDispatchToProps = dispatch => ({
  getEvents: params => dispatch(redux.rest.actions.getEvents(params))
});

export const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
