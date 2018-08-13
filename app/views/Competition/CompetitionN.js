import {
  StackNavigator,
} from 'react-navigation'

import PlayersC from './Players/PlayersC'
import GroupTurnC from './GroupTurn/GroupTurnC'
import OlympicTurnC from './OlympicTurn/OlympicTurnC'

export const PLAYERS = 'PLAYERS'
export const GROUP_TURN = 'GROUP_TURN'
export const OLYMPIC_TURN = 'OLYMPIC_TURN'

const CompetitionN = StackNavigator({
  [PLAYERS]: {
    screen: PlayersC,
    navigationOptions: { title: 'Players' },
  },
  [GROUP_TURN]: {
    screen: GroupTurnC,
    navigationOptions: { title: 'Group Turn' },
  },
  [OLYMPIC_TURN]: {
    screen: OlympicTurnC,
    navigationOptions: { title: 'Olympic Turn' },
  },
}, {
  initialRouteName: PLAYERS,
})

export default CompetitionN
