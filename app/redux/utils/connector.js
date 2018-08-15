import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'

// TODO: think why it is not working now
export default (selectorsMap, actionsMap) => connect(
  createStructuredSelector(selectorsMap),
  dispatch => bindActionCreators(actionsMap, dispatch),
)
