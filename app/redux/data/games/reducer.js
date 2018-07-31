import R from 'ramda'
import { createSelector } from 'reselect'
import { handleAction } from 'redux-actions'

import { createGame } from './actions'

export const GAMES_RN = 'GAMES'
// CRUD
export default handleAction({
  [createGame]: (gamesById, { payload }) => ({
    ...gamesById,
    [Math.random()]: payload,
  }),
}, {}, {})

export const gamesSelector = createSelector(
  [R.path([GAMES_RN])],
  R.identity,
)
