import R from 'ramda'
import { createSelector } from 'reselect'
import { CREATE_USER } from './types'

export const USERS_RN = 'USERS'

let id = 0
export default function (state = [], { type, payload }) {
  switch (type) {
    case CREATE_USER:
      return state.concat({
        ...payload,
        id: String(id++),
      })
    default:
      return state
  }
}

export const usersSelector = createSelector(
  [R.path([USERS_RN])],
  R.identity,
)
