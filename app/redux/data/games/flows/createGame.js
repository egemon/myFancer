import { fetchWithActions } from '../../../utils/fetch'
import { createGameRequest } from '../api'
import { createGameAsyncActions } from '../actions'

export const createGameFlow = function* createGameFlow({
  payload: game,
}) {
  try {
    yield fetchWithActions({
      request: createGameRequest(game),
      actions: createGameAsyncActions,
    })
  } catch (err) {
    console.log('createGameFlowError')
  }
}
