import * as types from './actionTypes';  
import userApi from '../api/userApi';
import { loginSuccess } from './sessionActions';
import { push } from 'connected-react-router';

export function createUserRequest(){
  return {type: types.CREATE_USER_REQUEST}
}

export function createUserSuccess() {  
  return {type: types.CREATE_USER_SUCCESS}
}

export function createUserFailure(error) {  
  return {type: types.CREATE_USER_FAILURE, error: error}
}

export function createUser(payload) {  
  return function(dispatch) {
    dispatch(createUserRequest());
    return userApi.postCreateUser(payload).then(response => {
      dispatch(loginSuccess({user: response.user, jwt: response.jwt}));
      dispatch(createUserSuccess())
      dispatch(push('/'));
    }).catch(error => {
      dispatch(createUserFailure(error));
    });
  };
}
