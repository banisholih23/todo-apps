import {combineReducers} from 'redux'

import toggle from './toggle'
import todoTask from './todo'

export default combineReducers({
  toggle,
  todoTask
})