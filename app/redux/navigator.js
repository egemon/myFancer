import { NavigationActions } from 'react-navigation'


class Navigator {
  navigators = {}

  saveNavigator = (name, navigator) => {
    this.navigators[name] = navigator
  }

  go = ({
    routeName,
    params,
    subaction,
    navigator = 'root',
  }) => {
    this.navigators[navigator].dispatch(NavigationActions.navigate({
      routeName,
      params,
      action: subaction,
    }))
  }
}

export default new Navigator()
