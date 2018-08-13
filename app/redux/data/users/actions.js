import { createAction } from 'redux-actions'
import { createAsyncActions } from '../../utils/redux'

const createUserType = 'createUserType'
export const createUser = createAction(createUserType)
export const createUserAsyncActions = createAsyncActions(createUserType)
