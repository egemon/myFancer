import { createAsyncActions } from '../../utils/redux'
import { createGameType, updateGameType } from '../../action-types'

// TODO: think, maybe we should have CRUD - 4 flows for each model.
// And then two possibilities: as in Ember we can dispatch one of CRUD actions in each component
// but this will be problem in asyn await

// or we should better have other flows, which are more related to business logic and buttons
// but not to models, which will call any of these 4 flows for each models as part of process
export const createGameActions = createAsyncActions(createGameType)
export const updateGameActions = createAsyncActions(updateGameType)
