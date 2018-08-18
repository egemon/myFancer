import {
  createStackNavigator,
} from 'react-navigation'

import Players from './Players/Players'
import GroupTurnC from './GroupTurn/GroupTurnC'
import OlympicTurnC from './OlympicTurn/OlympicTurnC'

export const PLAYERS = 'PLAYERS'
export const GROUP_TURN = 'GROUP_TURN'
export const OLYMPIC_TURN = 'OLYMPIC_TURN'

const CompetitionN = createStackNavigator({
  [PLAYERS]: {
    screen: Players,
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
