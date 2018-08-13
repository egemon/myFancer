import R from 'ramda'
import { createSelector } from 'reselect'
import { createUserAsyncActions } from './actions'
import { createAsyncReducer, createAsyncSelectors } from '../../utils/redux'

export const USERS_RN = 'USERS'

// TODO: maybe this is general collection reducer, we should also rewrite RUD for it?
export default createAsyncReducer(createUserAsyncActions, {
  [createUserAsyncActions.success]: (state, { payload }) => ({
    loading: false,
    error: null,
    data: {
      ...state.data,
      [payload.id]: payload,
    },
  }),
})

const usersAsyncSelectors = createAsyncSelectors([USERS_RN])

export const usersSelector = createSelector(
  [usersAsyncSelectors.dataSelector],
  R.values,
)
