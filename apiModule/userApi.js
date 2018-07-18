import { buildAddress } from './buildAddress'

class userApi {  
  static postCreateUser(payload) {
    const address = buildAddress(client, 'login')
    const request = new Request(address, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({registration: payload})
    });

    return fetch(request).then(response => {
      if (!response.ok) {
        let createUserError = new Error([response.status,response.message]);
        return createUserError;
      } else {
        return response.json();
      }
      
    }).catch(error => {
      return error;
    });
  } 
}

export default userApi;  