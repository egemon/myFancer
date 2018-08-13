import { fetchWithActions } from '../../../utils/fetch'
import { createGameRequest } from '../api'
import { createGameAsyncActions } from '../actions'
import navigator from '../../../navigator'
import { COMPETITION } from '../../../../views/Navigator'

export const createGameFlow = function* createGameFlow() {
  try {
    const { id } = yield fetchWithActions({
      request: createGameRequest({
        players: [],
      }),
      actions: createGameAsyncActions,
    })

    navigator.go({
      routeName: COMPETITION,
      params: {
        gameId: id,
      },
    })
  } catch (err) {
    console.log('createGameFlowError')
  }
}
