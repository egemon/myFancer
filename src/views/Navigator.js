import {
  createStackNavigator,
} from 'react-navigation'
import Menu from './Menu/Menu'
import CompetitionN from './Competition/CompetitionN'

export const MENU = 'MENU'
export const COMPETITION = 'COMPETITION'

export default createStackNavigator({
  [MENU]: {
    screen: Menu,
    navigationOptions: {
      title: 'Main Menu',
    },
  },
  [COMPETITION]: {
    screen: CompetitionN,
    navigationOptions: {
      title: 'Competition',
    },
  },
},
{
  initialRouteName: MENU,
})
