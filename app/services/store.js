import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
// import {createLogger} from 'redux-logger'
import rootReducer from '../reducers'

export function configureStore (initialState = {}) {
  const middleware = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    // middleware.push(createLogger({
    //   collapsed: true,
    //   logger: console,
    //   level: {
    //     prevState: 'debug',
    //     action: 'debug',
    //     nextState: 'debug',
    //     error: 'error'
    //   }
    // }))
  }

  const enhancers = [
    applyMiddleware(...middleware)
  ];

  return createStore(rootReducer, initialState, compose(...enhancers))
}

export default configureStore();
