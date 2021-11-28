import { BASE_API_URL } from './constants';

export const getRequest = async url => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  return fetch(`${BASE_API_URL}${url}`, requestOptions)
      .then(response => response.json())
}