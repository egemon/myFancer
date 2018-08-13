import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { usersSelector } from '../../../redux/data/users/reducer'
import { createUser } from '../../../redux/data/users/actions'
import { createGame, togglePlayer } from '../../../redux/data/games/actions'
import { selectedPlayerIdsSelector } from '../../../redux/data/games/reducer'
import PlayersV from './PlayersV'

const PlayersC = connect(createStructuredSelector({
  users: usersSelector,
  selectedIds: (state, props) => selectedPlayerIdsSelector(state, props),
}), dispatch => bindActionCreators({
  createGame,
  createUser,
  togglePlayer,
}, dispatch))(PlayersV)

PlayersC.title = 'Players'

export default PlayersC
