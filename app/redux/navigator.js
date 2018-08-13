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

  // TODO: maybe expose API of the default navigator and create anther mechanism
  // to differ them?
  getParam = (paramName, navigator = 'root') => {
    const { routes, index } = this.navigators[navigator].state.nav
    return routes[index].params[paramName]
  }
}

export default new Navigator()
