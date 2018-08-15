import { takeLatest } from 'redux-saga/effects'
import { fetchWithActions } from '../../../utils/fetch'
import { createUserRequest } from '../api'
import { createUserActions } from '../actions'

export const createUserFlow = function* createUserFlow({
  payload: user,
}) {
  try {
    yield fetchWithActions({
      request: createUserRequest(user),
      actions: createUserActions,
    })
  } catch (err) {
    console.log('createUserFlowError')
  }
}
export const createUserFlowConfig = takeLatest(createUserActions.TRIGGER, createUserFlow)
