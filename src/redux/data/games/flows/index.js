import { all } from 'redux-saga/effects'

import { createGameFlowConfig } from './createGame'
import { updateGameFlowConfig } from './updateGame'


export default function* main() {
  yield all([
    createGameFlowConfig,
    updateGameFlowConfig,
  ])
}
