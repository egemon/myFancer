import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { createGame } from '../../redux/data/games/actions'
import MenuV from './MenuV'

export default connect(createStructuredSelector({

}), dispatch => bindActionCreators({
  createGame,
}, dispatch))(MenuV)
