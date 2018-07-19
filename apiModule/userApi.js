import { buildAddress } from './buildAddress'

class userApi {  
  static postCreateUser(payload, client) {
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
        throw new Error({response.status});
      }
      return response.json();
    });
  } 
}

export default userApi;  