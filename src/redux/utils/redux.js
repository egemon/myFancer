
import R from 'ramda'
import { createAction, handleActions } from 'redux-actions'

const trigger = 'trigger'
const request = 'request'
const success = 'success'
const error = 'error'
const clear = 'clear'

export const createAsyncActions = (namespace) => {
  const TRIGGER = `${namespace} : ${trigger}`
  const REQUEST = `${namespace} : ${request}`
  const SUCCESS = `${namespace} : ${success}`
  const ERROR = `${namespace} : ${error}`
  const CLEAR = `${namespace} : ${clear}`

  return ({
    TRIGGER,
    REQUEST,
    SUCCESS,
    ERROR,
    CLEAR,

    [trigger]: createAction(TRIGGER),
    [request]: createAction(REQUEST),
    [success]: createAction(SUCCESS),
    [error]: createAction(ERROR),
    [clear]: createAction(CLEAR),
  })
}

const initState = { loading: false, data: null, error: null }

const requestReducer = (state => ({
  data: state.data,
  loading: true,
  error: null,
}))
const successReducer = (state, action) => ({
  error: null,
  loading: false,
  data: action.payload,
})
const failReducer = (state, action) => ({
  loading: false,
  data: null,
  error: action.payload,
})

// TODO: here should be also CRUD reducer for collections, this reducer for singleton
export const createAsyncReducer = (asyncAction, otherActions) => handleActions({
  [asyncAction.request]: requestReducer,
  [asyncAction.success]: successReducer,
  [asyncAction.fail]: failReducer,
  [asyncAction.clear]: () => ({ ...initState }),
  ...otherActions,
}, initState)

export const createLoadingErrorReducer = asyncAction => handleActions({
  [asyncAction.request]: () => ({
    error: null,
    loading: true,
  }),
  [asyncAction.success]: () => ({
    error: null,
    loading: false,
  }),
  [asyncAction.fail]: (state, payload) => ({
    error: payload,
    loading: false,
  }),
}, {
  error: null,
  loading: false,
})

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
