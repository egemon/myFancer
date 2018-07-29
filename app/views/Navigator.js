import {
  StackNavigator,
} from 'react-navigation'
import HomeC from './Home/HomeC'
import CompetitionView from './Competition'


export default StackNavigator({
  Home: { screen: HomeC },
  Competition: { screen: CompetitionView },
},
{
  initialRouteName: 'Home',
})
