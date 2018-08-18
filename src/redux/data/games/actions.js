import { createAsyncCollectionActions } from '../../utils/collection-reducer-factory'

// TODO: think, maybe we should have CRUD - 4 flows for each model.
// And then two possibilities: as in Ember we can dispatch one of CRUD actions in each component
// but this will be problem in asyn await

const collectionName = 'games'
export const gameCollectionActions = createAsyncCollectionActions(collectionName)
