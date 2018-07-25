import { buildAddress } from './buildAddress'

class noteApi {
  static postCreateNote(payload, client) {
    const address = buildAddress(client, 'notes')
    const request = new Request(address, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json', 
        'Authorization': payload.jwt,
      }), 
      body: JSON.stringify({note: payload.note, user:payload.id})
    });

    return fetch(request).then(response => {
      if (!response.ok) {
        throw new Error({status:response.status});
      } 
      return response.json();
      
    });
  }

  static getNotesIndex(payload, client) {
    const address = buildAddress(client, 'notes_index')
    const request = new Request(address, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': payload.jwt,
      }), 
      body: JSON.stringify({user:payload.id})
    });

    return fetch(request).then(response => {
      if (!response.ok) {
        throw new Error({status:response.status});
      } 
      return response.json();
    });
  }
}

export default noteApi