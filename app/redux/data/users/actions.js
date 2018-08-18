import { createAsyncActions } from '../../utils/redux'
import { createUserType } from '../../action-types'

export const createUserActions = createAsyncActions(createUserType)
