import R from 'ramda'
import { createSelector } from 'reselect'
import { createUserActions } from './actions'
import { createAsyncReducer, createAsyncSelectors } from '../../utils/redux'

export const USERS_RN = 'USERS'

// TODO: maybe this is general collection reducer, we should also rewrite RUD for it?
export default createAsyncReducer(createUserActions, {
  [createUserActions.success]: (state, { payload }) => ({
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
