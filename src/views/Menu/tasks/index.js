import { all } from 'redux-saga/effects'

import createGameTaskConfig from './makeGame'

export default function* main() {
  yield all([
    createGameTaskConfig,
  ])
}
