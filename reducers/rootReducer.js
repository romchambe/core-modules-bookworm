import { combineReducers } from 'redux'
import session from './sessionReducer'
import error from './errorReducer'
import user from './userReducer'


const rootReducer = combineReducers({
  session, 
  error,
  user
})

export default rootReducer