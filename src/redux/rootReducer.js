import { combineReducers } from 'redux'

import users, { USERS_RN } from './data/users/reducer'
import games, { GAMES_RN } from './data/games/reducer'

export default combineReducers({
  [USERS_RN]: users,
  [GAMES_RN]: games,
})
