import {
  StackNavigator,
} from 'react-navigation'
import HomeC from './Home/HomeC'
import MenuC from './Menu/MenuC'
import CompetitionView from './Competition'

export const MENU = 'MENU'
export const HOME = 'HOME'
export const COMPETITION = 'COMPETITION'

export default StackNavigator({
  [MENU]: { screen: MenuC },
  [HOME]: { screen: HomeC },
  [COMPETITION]: { screen: CompetitionView },
},
{
  initialRouteName: MENU,
})
