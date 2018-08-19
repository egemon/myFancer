import { createAction } from 'redux-actions'
import { take, put, takeLatest } from 'redux-saga/effects'
import { gameCollectionActions } from '../../../redux/data/games/actions'
import { getAllGamesType } from '../../../redux/action-types'

export const getAllGames = createAction(getAllGamesType)
export const getAllGamesTask = function* getAllGamesTask() {
  try {
    yield put(gameCollectionActions.read.trigger())
    yield take(gameCollectionActions.read.SUCCESS)
  } catch (err) {
    console.log('createGameTaskError', err)
  }
}

export default takeLatest(getAllGamesType, getAllGamesTask)
