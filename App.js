import React from 'react'
import { Provider } from 'react-redux'

import './app/initializers'
import store from './app/redux/store'
import Navigator from './app/views/Navigator'
import navigationService from './app/redux/navigator'

// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Remote debugger'])
console.disableYellowBox = true // eslint-disable-line

export default () => (
  <Provider store={store}>
    <Navigator
      ref={rootNavigator => navigationService.saveNavigator('root', rootNavigator)}
    />
  </Provider>
)
