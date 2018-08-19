import { takeLatest } from 'redux-saga/effects'
import { fetchWithActions } from '../../../utils/fetch'
import { readGameRequest } from '../api'
import { gameCollectionActions } from '../actions'

export const readGameFlow = function* readGameFlow({
  payload: params,
}) {
  try {
    yield fetchWithActions({
      request: readGameRequest(params),
      actions: gameCollectionActions.read,
    })
  } catch (err) {
    console.log('readGameFlowError')
  }
}
export const readGameFlowConfig = takeLatest(gameCollectionActions.read.TRIGGER, readGameFlow)
