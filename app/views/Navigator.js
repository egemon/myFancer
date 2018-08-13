import {
  StackNavigator,
} from 'react-navigation'
import HomeC from './Home/HomeC'
import MenuC from './Menu/MenuC'
import CompetitionN from './Competition/CompetitionN'

export const MENU = 'MENU'
export const HOME = 'HOME'
export const COMPETITION = 'COMPETITION'

export default StackNavigator({
  [MENU]: {
    screen: MenuC,
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
