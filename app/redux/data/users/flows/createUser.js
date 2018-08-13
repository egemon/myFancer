import { call } from 'redux-saga/effects'
import { fetchWithActions } from '../../../utils/fetch'
import { createUserRequest } from '../api'
import { createUserAsyncActions } from '../actions'
import navigator from '../../../navigator'
import { COMPETITION } from '../../../../views/Navigator'

export const createUserFlow = function* createUserFlow({
  payload: {
    data: {
      name,
    },
    actions: {
      clearQuery,
    },
  },
}) {
  try {
    yield fetchWithActions({
      request: createUserRequest({ name }),
      actions: createUserAsyncActions,
    })
    yield call(clearQuery)
    navigator.go({ routeName: COMPETITION })
  } catch (err) {
    console.log('createUserFlowError')
  }
}
