import { createAction } from 'redux-actions'
import { createAsyncActions } from '../../utils/redux'

const createGameType = 'createGameType'
export const createGame = createAction(createGameType)
export const createGameAsyncActions = createAsyncActions(createGameType)

const togglePlayerType = 'togglePlayerType'
export const togglePlayer = createAction(togglePlayerType)

// TODO: think, maybe we should have CRUD - 4 flows for each model.
// And then two possibilities: as in Ember we can dispatch one of CRUD actions in each component
// but this will be problem in asyn await

// or we should better have other flows, which are more related to business logic and buttons
// but not to models, which will call any of these 4 flows for each models as part of process
const updateGameType = 'updateGameType'
// export const updateGame = createAction(updateGameType)
export const updateGameAsyncActions = createAsyncActions(updateGameType)
