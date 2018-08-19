import { createSelector } from 'reselect'

import { gameCollectionActions } from './actions'
import { createCollectionReducer, createCollectionSelectors } from '../../utils/collection-reducer-factory'

export const GAMES_RN = 'GAMES'
export default createCollectionReducer(gameCollectionActions)

const gamesSelectors = createCollectionSelectors([GAMES_RN])

export const selectedPlayerIdsSelector = createSelector(
  [gamesSelectors.byId, (state, props) => props.navigation.getParam('gameId')],
  (gamesById, gameId) => gamesById[gameId].players,
)
export const allGamesSelector = gamesSelectors.allItemsSelector
