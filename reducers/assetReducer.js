import * as types from '../actions/actionTypes';  
import initialState from '../initialState';  

const error = (state = initialState, action) => {  
  switch(action.type) {
    case types.FONT_LOADED:
      return Object.assign({}, state, {
        fontLoaded: true
      })
    default: 
      return state;
  }
}

export default error