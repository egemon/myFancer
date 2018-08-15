import {
  call, put, take, takeLatest,
} from 'redux-saga/effects'
import createAction from 'redux-actions/es/createAction'
import { createUserActions } from '../../../../redux/data/users/actions'
import navigator from '../../../../redux/navigator'
import { COMPETITION } from '../../../Navigator'

const type = 'makeUser'

export const makeUser = createAction(type)
export const makeUserTask = function* makeUserTask({
  payload: {
    data: user,
    actions: {
      clearQuery,
    },
  },
}) {
  try {
    // TODO: think about shorcut for this two lines
    // TODO: think about handling errors here?
    yield put(createUserActions.trigger(user))
    yield take(createUserActions.SUCCESS)

    yield call(clearQuery)
    navigator.go({ routeName: COMPETITION })
  } catch (err) {
    console.log('makeUserTaskError')
  }
}
export default takeLatest(type, makeUserTask)
