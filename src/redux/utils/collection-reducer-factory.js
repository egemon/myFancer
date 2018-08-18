import { createSelector } from 'reselect'
import handleActions from 'redux-actions/es/handleActions'
import $update from 'immutability-helper'
import R from 'ramda'
import { combineReducers } from 'redux'
import {
  createAsyncActions,
  createLoadingErrorReducer,
} from './redux'

const create = 'create'
const read = 'read'
const update = 'update'
const remove = 'remove'

export const createAsyncCollectionActions = (collecitonName) => {
  const CREATE = `${create} ${collecitonName}`
  const READ = `${read} ${collecitonName}`
  const UPDATE = `${update} ${collecitonName}`
  const REMOVE = `${remove} ${collecitonName}`

  return ({
    READ,
    CREATE,
    UPDATE,
    REMOVE,

    [create]: createAsyncActions(CREATE),
    [read]: createAsyncActions(READ),
    [update]: createAsyncActions(UPDATE),
    [remove]: createAsyncActions(REMOVE),
  })
}

const byId = 'byId'
const ids = 'ids'
const data = 'data'
const status = 'status'

const initState = {
  [byId]: {},
  [ids]: [],
  // TODO: think about localizing loading in the component?
  // maybe HOC with local state + callbacks onSuccess onFail onRequest?
}
const createCollectionStatusReducer = asyncCollectionActions => combineReducers({
  [create]: createLoadingErrorReducer(asyncCollectionActions.create),
  [read]: createLoadingErrorReducer(asyncCollectionActions.read),
  [update]: createLoadingErrorReducer(asyncCollectionActions.update),
  [remove]: createLoadingErrorReducer(asyncCollectionActions.remove),
})

const createCollectionDataReducer = (asyncCollectionActions, otherActions) => handleActions({
  [asyncCollectionActions.create.success]: (state, { payload }) => $update(state, {
    [byId]: {
      $merge: {
        [payload.id]: payload,
      },
    },
    [ids]: {
      $push: [payload.id],
    },
  }),
  //   TODO: think more about model relations
  // [asyncCollectionActions.read.success]: (state, { payload }) => $update(state, {
  //   [byId]: { $merge: {
  //       [payload.id]: payload,
  //     } },
  //   [ids]: {
  //     $push: [payload.id],
  //   },
  // }),
  [asyncCollectionActions.update.success]: (state, { payload }) => $update(state, {
    [byId]: {
      // TODO: we are not allowed to use functions here, because we r sending this update to server
      [payload.id]: payload.update,
    },
  }),
  [asyncCollectionActions.remove.success]: (state, { payload }) => $update(state, {
    [byId]: R.omit([payload.id]),
    [ids]: R.reject(R.equals(payload.id)),
  }),
  ...otherActions,
}, initState)

export const createCollectionReducer = (asyncCollectionActions, otherActions) => combineReducers({
  [data]: createCollectionDataReducer(asyncCollectionActions, otherActions),
  [status]: createCollectionStatusReducer(asyncCollectionActions),
})

export const createCollectionSelectors = (pathArray) => {
  const wrappedPath = R.unless(Array.isArray, R.of)(pathArray)
  const byIdSelector = R.path([...wrappedPath, data, byId])
  const idsSelector = R.path([...wrappedPath, data, ids])
  return ({
    byId: byIdSelector,
    ids: idsSelector,
    // createItemByIdSelector: id => createSelector(
    //   [byIdSelector],
    //   R.path([id]),
    // ),
    allItemsSelector: createSelector(
      [byIdSelector, idsSelector],
      (byIdState, idsState) => idsState.map(id => byIdState[id]),
    ),
  })
}
