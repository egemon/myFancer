import { createAsyncActions } from '../../utils/redux'

const createUserType = 'createUserType'
export const createUserActions = createAsyncActions(createUserType)
