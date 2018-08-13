import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { createGame } from '../../redux/data/games/actions'
import MenuV from './MenuV'

const MenuC = connect(createStructuredSelector({

}), dispatch => bindActionCreators({
  createGame,
}, dispatch))(MenuV)

export default MenuC
