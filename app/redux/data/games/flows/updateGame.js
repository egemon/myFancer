import { select, takeLatest } from 'redux-saga/effects'
import $applyUpdate from 'immutability-helper'
import { gamesSelector } from '../reducer'
import { fetchWithActions } from '../../../utils/fetch'
import { updateGameRequest } from '../api'
import { updateGameActions } from '../actions'

export const updateGameFlow = function* updateGameFlow({
  payload: {
    id,
    update,
  },
}) {
  try {
    const games = yield select(gamesSelector)
    const currentGame = games.find(game => game.id === id)
    const updatedGame = $applyUpdate(currentGame, update)
    // TODO: think about optimistic UI.
    // Maybe we need to react on request with store update
    yield fetchWithActions({
      request: updateGameRequest(updatedGame),
      actions: updateGameActions,
    })
  } catch (err) {
    console.log('updateGameFlowError')
  }
}

export const updateGameFlowConfig = takeLatest(updateGameActions.TRIGGER, updateGameFlow)
