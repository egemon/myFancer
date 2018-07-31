import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { createUser } from '../../redux/data/users/actions'
import { usersSelector } from '../../redux/data/users/reducer'

import HomeV from './HomeV'

export default connect(createStructuredSelector({
  users: usersSelector,
}), dispatch => bindActionCreators({
  createUser,
}, dispatch))(HomeV)
