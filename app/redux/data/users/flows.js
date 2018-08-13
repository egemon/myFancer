import {
  all, takeLatest,
} from 'redux-saga/effects'

import { createUser } from './actions'
import { createUserFlow } from './flows/createUser'

export default function* main() {
  yield all([
    takeLatest(createUser().type, createUserFlow),
  ])
}
