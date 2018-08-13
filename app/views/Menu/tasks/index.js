import { all } from 'redux-saga/effects'

import createGameTaskConfig from './newGame'

export default function* main() {
  yield all([
    createGameTaskConfig,
  ])
}
