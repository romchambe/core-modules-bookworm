import * as types from './actionTypes';  
import noteApi from '../apiModule/noteApi';
import { push } from 'connected-react-router';

export function createNoteRequest(){
  return {type: types.CREATE_NOTE_REQUEST}
}
export function createNoteSuccess(payload){
  return {type: types.CREATE_NOTE_REQUEST, id:payload.id, infos:{title: payload.title, updatedAt: payload.updatedAt}}
}
export function createNoteFailure(){
  return {type: types.CREATE_NOTE_REQUEST}
}

export function createNote (payload,client){
  return function(dispatch) {
    dispatch(createNoteRequest()).
    return noteApi.postCreateNote(payload,client).then(response => {
      dispatch(createNoteSuccess({id: response.id, title: response.title, updatedAt: response.updatedAt}))
      dispatch(push('/scan'));
    }).catch(error => {
      dispatch(createNoteFailure(error));
    });
  }
}

export function readNotesIndex (payload,client){
  return function(dispatch) {
    dispatch(createNoteRequest()).
    return noteApi.postCreateNote(payload,client).then(response => {
      dispatch(createNoteSuccess({id: response.id, title: response.title, updatedAt: response.updatedAt}))
      dispatch(push('/scan'));
    }).catch(error => {
      dispatch(createNoteFailure(error));
    });
  }
}