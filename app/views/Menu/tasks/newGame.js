import { createAction } from 'redux-actions'
import { take, put, takeLatest } from 'redux-saga/effects'
import { createGame, createGameAsyncActions } from '../../../redux/data/games/actions'
import navigator from '../../../redux/navigator'
import { COMPETITION } from '../../Navigator'

// TODO: all action types should be in one place to avoid collision
const type = 'newGameTask'

export const runCreateGame = createAction(type)

// TODO: think about automated unwrapping data from action payload, so it can
// looks like function call directly
export const newGame = function* createGameTask() {
  try {
    yield put(createGame({
      players: [],
    }))
    const { payload: { id } } = yield take(createGameAsyncActions.SUCCESS)

    navigator.go({
      routeName: COMPETITION,
      params: {
        gameId: id,
      },
    })
  } catch (err) {
    console.log('createGameTaskError', err)
  }
}

export default takeLatest(type, newGame)
