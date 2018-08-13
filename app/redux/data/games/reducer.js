import R from 'ramda'
import { createSelector } from 'reselect'

import { createAsyncReducer, createAsyncSelectors } from '../../utils/redux'
import { createGameAsyncActions, updateGameAsyncActions } from './actions'

export const GAMES_RN = 'GAMES'
// CRUD
export default createAsyncReducer(createGameAsyncActions, {
  [createGameAsyncActions.success]: (state, { payload }) => ({
    loading: false,
    error: null,
    data: {
      ...state.data,
      [payload.id]: payload,
    },
  }),
  [updateGameAsyncActions.success]: (state, { payload }) => ({
    loading: false,
    error: null,
    data: {
      ...state.data,
      [payload.id]: payload,
    },
  }),
  //   TODO: think more about model relationsh
})

const gamesAsyncSelectors = createAsyncSelectors([GAMES_RN])

export const selectedPlayerIdsSelector = createSelector(
  [gamesAsyncSelectors.dataSelector, (state, props) => props.navigation.getParam('gameId')],
  (gamesById, gameId) => gamesById[gameId].players,
)
export const gamesSelector = createSelector(
  [gamesAsyncSelectors.dataSelector],
  R.values,
)
