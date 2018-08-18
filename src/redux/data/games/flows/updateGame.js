import { takeLatest } from 'redux-saga/effects'
import { fetchWithActions } from '../../../utils/fetch'
import { updateGameRequest } from '../api'
import { gameCollectionActions } from '../actions'

export const updateGameFlow = function* updateGameFlow({
  payload: {
    id,
    update,
  },
}) {
  try {
    // TODO: think about optimistic UI.
    // Maybe we need to react on request with store update
    yield fetchWithActions({
      request: updateGameRequest({ id, update }),
      actions: gameCollectionActions.update,
    })
  } catch (err) {
    console.log('updateGameFlowError')
  }
}

export const updateGameFlowConfig = takeLatest(gameCollectionActions.update.TRIGGER, updateGameFlow)
