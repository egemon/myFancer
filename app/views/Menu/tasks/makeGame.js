import { createAction } from 'redux-actions'
import { take, put, takeLatest } from 'redux-saga/effects'
import { createGameActions } from '../../../redux/data/games/actions'
import navigator from '../../../redux/navigator'
import { COMPETITION } from '../../Navigator'

// TODO: all action types should be in one place to avoid collision
const type = 'makeGame'

export const makeGame = createAction(type)

// TODO: think about automated unwrapping data from action payload, so it can
// looks like function call directly
export const makeGameTask = function* makeGameTask() {
  try {
    yield put(createGameActions.trigger({
      players: [],
    }))
    const { payload: { id } } = yield take(createGameActions.SUCCESS)

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

export default takeLatest(type, makeGameTask)
