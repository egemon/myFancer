import { all } from 'redux-saga/effects'

import { createUserFlowConfig } from './createUser'


export default function* main() {
  yield all([
    createUserFlowConfig,
  ])
}
