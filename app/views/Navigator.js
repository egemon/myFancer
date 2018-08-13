import {
  StackNavigator,
} from 'react-navigation'
import HomeC from './Home/HomeC'
import Menu from './Menu/Menu'
import CompetitionN from './Competition/CompetitionN'

export const MENU = 'MENU'
export const HOME = 'HOME'
export const COMPETITION = 'COMPETITION'

export default StackNavigator({
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
  [HOME]: { screen: HomeC }, // TODO not needed?
},
{
  initialRouteName: MENU,
})
