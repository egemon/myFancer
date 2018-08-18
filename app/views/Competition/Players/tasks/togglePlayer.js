import { put, takeLatest } from 'redux-saga/effects'
import createAction from 'redux-actions/es/createAction'
import R from 'ramda'

import navigator from '../../../../redux/navigator'
import { updateGameActions } from '../../../../redux/data/games/actions'
import { togglePlayerType } from '../../../../redux/action-types'


export const togglePlayer = createAction(togglePlayerType)
export const togglePlayerTask = function* togglePlayerTask({
  payload: {
    data: {
      player,
      wasSelected,
    },
  },
}) {
  try {
    yield put(updateGameActions.trigger({
      id: navigator.getParam('gameId'),
      update: wasSelected
        // TODO: think about extension of helpers
        ? { players: R.reject(R.equals(player.id)) }
        : { players: { $push: [player.id] } },
    }))
  } catch (err) {
    console.log('togglePlayerTaskError')
  }
}

export default takeLatest(togglePlayerType, togglePlayerTask)
