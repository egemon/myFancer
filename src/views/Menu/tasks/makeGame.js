import { createAction } from 'redux-actions'
import { take, put, takeLatest } from 'redux-saga/effects'
import { gameCollectionActions } from '../../../redux/data/games/actions'
import navigator from '../../../redux/navigator'
import { COMPETITION } from '../../Navigator'
import { makeGameType } from '../../../redux/action-types'

// TODO: all action types should be in one place to avoid collision

export const makeGame = createAction(makeGameType)

// TODO: think about automated unwrapping data from action payload, so it can
// looks like function call directly
export const makeGameTask = function* makeGameTask() {
  try {
    yield put(gameCollectionActions.create.trigger({
      players: [],
    }))
    const { payload: { id } } = yield take(gameCollectionActions.create.SUCCESS)

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

export default takeLatest(makeGameType, makeGameTask)
