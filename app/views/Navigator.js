import {
  StackNavigator,
} from 'react-navigation';
import HomeView from './Home';
import CompetitionView from './Competition';


export default StackNavigator({
    Home: { screen: HomeView },
    Competition: { screen: CompetitionView },
  },
  {
    initialRouteName: 'Home',
  }
);
