import {
  all, takeLatest,
} from 'redux-saga/effects'

import { createGame, togglePlayer } from './actions'
import { createGameFlow } from './flows/createGame'
import { togglePlayerFlow } from './flows/togglePlayer'


export default function* main() {
  yield all([
    // TODO: maybe this part should be moved to flow file
    takeLatest(togglePlayer().type, togglePlayerFlow),
    takeLatest(createGame().type, createGameFlow),
  ])
}
