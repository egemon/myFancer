import { call, put } from 'redux-saga/effects'

export function* fetchWithActions({
  request,
  actions,
}) {
  try {
    yield put(actions.request())

    const res = yield call(request)

    yield put(actions.success(res))
    return res
  } catch (error) {
    console.log('error API', error)
    yield put(actions.error(error))
    throw error
  }
}
