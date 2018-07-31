import React from 'react'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'

import store from './app/redux/store'
import Navigator from './app/views/Navigator'
import navigationService from './app/redux/navigator'

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Remote debugger'])

export default () => (
  <Provider store={store}>
    <Navigator
      ref={rootNavigator => navigationService.saveNavigator('root', rootNavigator)}
    />
  </Provider>
)
