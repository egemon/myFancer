import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import flows from './rootFlow'
import tasks from '../views/rootTask'

const sagaMiddleware = createSagaMiddleware()
export function configureStore(initialState = {}) {
  // TODO: not sure about the order here
  const middlewares = [sagaMiddleware]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger({
      collapsed: true,
      logger: console,
      level: {
        prevState: 'debug',
        action: 'debug',
        nextState: 'debug',
        error: 'error',
      },
    }))
  }

  const store = createStore(rootReducer, initialState, compose(
    ...middlewares.map(middleware => applyMiddleware(middleware)),
  ));

  [...flows, ...tasks].forEach(flow => sagaMiddleware.run(flow))


  return store
}

export default configureStore()
