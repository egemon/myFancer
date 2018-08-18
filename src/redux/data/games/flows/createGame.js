import { takeLatest } from 'redux-saga/effects'
import { fetchWithActions } from '../../../utils/fetch'
import { createGameRequest } from '../api'
import { gameCollectionActions } from '../actions'

export const createGameFlow = function* createGameFlow({
  payload: game,
}) {
  try {
    yield fetchWithActions({
      request: createGameRequest(game),
      actions: gameCollectionActions.create,
    })
  } catch (err) {
    console.log('createGameFlowError')
  }
}
export const createGameFlowConfig = takeLatest(gameCollectionActions.create.TRIGGER, createGameFlow)
