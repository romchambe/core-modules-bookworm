import * as types from '../actions/actionTypes';  
import initialState from '../initialState';  

const notes = (state = initialState, action) => {  
  switch(action.type) {
    case types.CREATE_NOTE_REQUEST:
      return Object.assign({}, state, {
        isFetchingNewNote: true
      })
    case types.CREATE_NOTE_SUCCESS:
      return Object.assign({}, state, {
        ...state, isFetchingNewNote: false, action.id: action.infos
      })
    case types.CREATE_NOTE_FAILURE:
      return Object.assign({}, state, {
        isFetchingNewNote: false
      })
    case types.UPDATE_NOTE_REQUEST:
      return Object.assign({}, state, {
        isFetchingNewNote: true
      })
    case types.UPDATE_NOTE_SUCCESS:
      return Object.assign({}, state, {
        ...state, isFetchingNewNote: false, action.id:action.infos
      })
    case types.UPDATE_NOTE_FAILURE:
      return Object.assign({}, state, {
        isFetchingNewNote: false
      })
    default: 
      return state;
  }
}

export default notes