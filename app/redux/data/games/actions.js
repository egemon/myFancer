import { createAction } from 'redux-actions'
import { createAsyncActions } from '../../utils/redux'

import { CREATE_GAME } from './types'

export const createGame = createAction(CREATE_GAME)
export const createGameActions = createAsyncActions(CREATE_GAME)
