import { API_URL } from '../config'

export function buildAddress(client, uri) {
  if (client === 'mobile') {
    return const address = API_URL.development.mobile + uri
  } else if (client === 'web') {
    return const address = API_URL.development.web + uri
  } else {
    return new Error('Invalid client')
  }
}