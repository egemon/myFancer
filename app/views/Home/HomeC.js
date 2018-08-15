import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { createUserActions } from '../../redux/data/users/actions'
import { usersSelector } from '../../redux/data/users/reducer'

import HomeV from './HomeV'

export default connect(createStructuredSelector({
  users: usersSelector,
}), dispatch => bindActionCreators({
  // TODO: replace with saga?
  createUser: createUserActions.trigger,
}, dispatch))(HomeV)
