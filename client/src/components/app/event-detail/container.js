import { connect } from 'react-redux';
import { redux } from '../../../redux';
import { withRouter } from 'react-router-dom';
import { component } from './component';

const mapStateToProps = state => ({
  event: state.getSingleEvent.data
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
