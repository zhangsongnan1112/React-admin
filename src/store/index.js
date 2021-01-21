import { createStore, combineReducers } from 'redux'

import config from './reducer/config'
import user from './reducer/user'

const allreducer = {
  config,
  user
}

const store = createStore(combineReducers(allreducer),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store