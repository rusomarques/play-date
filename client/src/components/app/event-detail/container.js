import { connect } from 'react-redux';
import { redux } from '../../../redux';
import { withRouter } from 'react-router-dom';
import { component } from './component';

const mapStateToProps = state => ({
  events: state.getSingleEvent.data.data || []
});

const mapDispatchToProps = dispatch => ({
  getSingleEvent: params => dispatch(redux.rest.actions.getSingleEvent(params))
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
