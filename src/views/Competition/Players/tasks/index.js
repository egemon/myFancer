import { all } from 'redux-saga/effects'

import togglePlayerTaskConfig from './togglePlayer'
import makeUserTaskConfig from './makeUser'
// TODO: think maybe task runners also should collocate here?
export default function* main() {
  yield all([
    togglePlayerTaskConfig,
    makeUserTaskConfig,
  ])
}
