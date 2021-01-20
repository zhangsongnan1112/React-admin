import { createStore, combineReducers } from 'redux'

import config from './reducer/config'
import user from './reducer/user'

const allreducer = {
  config,
  user
}

const store = createStore(combineReducers(allreducer))

export default store