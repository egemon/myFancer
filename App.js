import React from 'react'
import { Provider } from 'react-redux'

import './src/initializers'
import store from './src/redux/store'
import Navigator from './src/views/Navigator'
import navigationService from './src/redux/navigator'

// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Remote debugger'])
console.disableYellowBox = true // eslint-disable-line

export default () => (
  <Provider store={store}>
    <Navigator
      ref={rootNavigator => navigationService.saveNavigator('root', rootNavigator)}
    />
  </Provider>
)
