import connect from 'react-redux/es/connect/connect'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'

export default (selectorsMap, actionsMap) => connect(
  createStructuredSelector(selectorsMap),
  dispatch => bindActionCreators(actionsMap, dispatch),
)
