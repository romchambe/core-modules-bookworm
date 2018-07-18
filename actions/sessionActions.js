import * as types from './actionTypes';  
import sessionApi from '../api/sessionApi';
import { push } from 'connected-react-router';


export function loginRequest() {
  return {type: types.LOGIN_REQUEST};
}
export function loginSuccess(payload) {  
  return {type: types.LOGIN_SUCCESS, user: payload.user, token: payload.jwt}
}

export function loginFailure(error) {  
  return {type: types.LOGIN_FAILURE, error: error}
}

export function logout() {
  return {type: types.LOGOUT};
}

export function loginUser(credentials) {  
  return function(dispatch) {
    dispatch(loginRequest());
    return sessionApi.postLogin(credentials).then(response => {      
      dispatch(loginSuccess({user: response.user, jwt: response.jwt}));
      dispatch(push('/'));
    }).catch(error => {
      dispatch(loginFailure(error));
    });
  };
}

export function logoutUser() {  
  return function(dispatch) {
    sessionStorage.removeItem('jwt');
    dispatch(push('/'));
    dispatch(logout());
  }
}