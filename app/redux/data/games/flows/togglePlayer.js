import R from 'ramda'
import { call, select, put } from 'redux-saga/effects'
import { togglePlayerRequest } from '../api'
import { updateGameAsyncActions } from '../actions'
import navigator from '../../../navigator'
import { gamesSelector } from '../reducer'

export const togglePlayerFlow = function* togglePlayerFlow({
  payload: {
    data: {
      player,
      wasSelected,
    },
  },
}) {
  try {
    // TODO: think, maybe we don't need always to put it into reducer
    // instead we can make a request and trigger another action
    // here for example we can make a request to toggle user
    // if success - just dispatch update for game collection without storing data
    const newPlayer = yield call(togglePlayerRequest({
      player,
      wasSelected,
    }))
    const games = yield select(gamesSelector)
    const currentGame = games.find(game => game.id === navigator.getParam('gameId'))
    // TODO: think about immutable here to handle all updates  to model
    yield put(updateGameAsyncActions.success({
      ...currentGame,
      // TODO: think why this part should know anything about model structure?
      players: newPlayer.isSelected
        ? [...currentGame.players, newPlayer.id]
        : R.reject(R.equals(newPlayer.id), currentGame.players),
    }))
  } catch (err) {
    console.log('togglePlayerFlowError')
  }
}
