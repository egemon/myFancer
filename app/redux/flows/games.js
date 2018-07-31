import {
  all, takeLatest,
} from 'redux-saga/effects'

import { CREATE_GAME } from '../data/games/types'
import { fetchWithActions } from '../utils/fetch'
import { createGameRequest } from '../data/games/api'
import { createGameActions } from '../data/games/actions'
import { COMPETITION } from '../../views/Navigator'

import navigator from '../navigator'

const createGameFlow = function* () {
  try {
    yield fetchWithActions({
      request: createGameRequest,
      actions: createGameActions,
    })

    navigator.go({ routeName: COMPETITION })
  } catch (err) {
    console.log('createGameFlowError')
  }
}

export default function* main() {
  yield all([
    takeLatest(CREATE_GAME, createGameFlow),
  ])
}
