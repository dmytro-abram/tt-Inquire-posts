export const BASE_URL = 'https://mate-api.herokuapp.com';

export function get(url, options) {
  return fetch(`${BASE_URL}${url}`, options)
    .then(response => response.json())
    .then(result => result.data);
}

export function save(url, data) {
  return get(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
}

export function patch(url, data) {
  return get(url, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
}

export function remove(url) {
  return get(url, { method: 'DELETE' });
}
