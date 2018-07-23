import { combineReducers } from 'redux'
import session from './sessionReducer'
import error from './errorReducer'
import user from './userReducer'
import asset from './assetReducer'

const rootReducer = combineReducers({
  session, 
  error,
  user,
  asset
})

export default rootReducer