/* eslint-disable no-underscore-dangle */

import R from 'ramda'
import { createAction, handleActions } from 'redux-actions'

export const createAsyncActions = (namespace) => {
  const REQUEST = `${namespace.toUpperCase()}_REQUEST`
  const SUCCESS = `${namespace.toUpperCase()}_SUCCESS`
  const ERROR = `${namespace.toUpperCase()}_ERROR`
  const CLEAR = `${namespace.toUpperCase()}_CLEAR`

  return ({
    REQUEST,
    SUCCESS,
    ERROR,
    CLEAR,

    request: createAction(REQUEST),
    success: createAction(SUCCESS),
    error: createAction(ERROR),
    clear: createAction(CLEAR),
  })
}

const initState = { loading: false, data: null, error: null }

export const requestReducer = (state => ({
  ...state, loading: true, error: null,
}))
export const successReducer = (state, action) => ({
  ...state, loading: false, data: action.payload,
})
export const errorReducer = (state, action) => ({
  ...state, loading: false, data: null, error: action.payload,
})

export const createAsyncReducer = (asyncAction, otherActions) => handleActions({
  [asyncAction.request]: requestReducer,
  [asyncAction.success]: successReducer,
  [asyncAction.error]: errorReducer,
  [asyncAction.clear]: () => ({ ...initState }),
  ...otherActions,
}, initState)

export const createAsyncSelectors = (pathArray) => {
  const wrappedPath = R.unless(Array.isArray, R.of)(pathArray)
  return ({
    dataSelector: R.path([...wrappedPath, 'data']),
    loadingSelector: R.path([...wrappedPath, 'loading']),
    errorSelector: R.path([...wrappedPath, 'error']),
  })
}

export const loadingStatusSelector = reducers => (state) => {
  if (Array.isArray(reducers)) {
    return reducers.reduce(
      (result, reducer) => {
        const reducerPath = R.compose(
          val => [...val, 'loading'],
          R.unless(Array.isArray, val => [val]),
        )(reducer)

        return R.or(result, R.pathOr(false, reducerPath, state))
      },
      false,
    )
  }

  return R.path([reducers, 'loading'], state)
}
