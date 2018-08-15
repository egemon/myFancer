import { takeLatest } from 'redux-saga/effects'
import { fetchWithActions } from '../../../utils/fetch'
import { createGameRequest } from '../api'
import { createGameActions } from '../actions'

export const createGameFlow = function* createGameFlow({
  payload: game,
}) {
  try {
    yield fetchWithActions({
      request: createGameRequest(game),
      actions: createGameActions,
    })
  } catch (err) {
    console.log('createGameFlowError')
  }
}
export const createGameFlowConfig = takeLatest(createGameActions.TRIGGER, createGameFlow)
