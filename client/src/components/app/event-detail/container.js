import { connect } from 'react-redux';
import { redux } from '../../../redux';
import { withRouter } from 'react-router-dom';
import { component } from './component';

const mapStateToProps = state => ({
  // events: state.getevents.data.data || []
});

const mapDispatchToProps = dispatch => ({
  getEvents: params => dispatch(redux.rest.actions.getEvents(params))
});

export const container = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(component)
);

// export const container = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(component);
