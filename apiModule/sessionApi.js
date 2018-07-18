import { buildAddress } from './buildAddress'

class sessionApi {
  static postLogin(credentials, client) {
    const address = buildAddress(client, 'login')
    const request = new Request(address, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({login: credentials})
    });

    return fetch(request).then(response => {
      if (!response.ok) {
        let loginError = new Error([response.status,response.message]);
        return loginError;
      } else {
        return response.json();
      }
    }).catch(error => {
      return error;
    });
  } 
}

export default sessionApi;  