import { all } from 'redux-saga/effects'

import makeGameTaskConfig from './makeGame'
import getAllGamesTaskConfig from './getAllGames'

export default function* main() {
  yield all([
    getAllGamesTaskConfig,
    makeGameTaskConfig,
  ])
}
