import { getVariable } from './configuration';
const apiUrl = getVariable('API_URL');

async function get(endpoint = '', header = {}) {
  return fetch(`${apiUrl}${endpoint}`, {
    headers: {
      ...header,
    },
  })
    .then((response) => (response.ok ? response.json() : Promise.reject(response)));
}

async function post(endpoint = '', data = {}, extraHeaders = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...extraHeaders,
  };
  const body = JSON.stringify(data);
  return fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    headers,
    body,
  })
    .then((response) => (response.ok ? response.json() : Promise.reject(response)));
}

async function put(endpoint = '', data = {}, extraHeaders = {}) {
  const headers = {
    ...extraHeaders,
  };
  const body = JSON.stringify(data);

  return fetch(`${apiUrl}${endpoint}`, {
    method: 'PUT',
    headers,
    body,
  })
    .then((response) => (response.ok && response.status !== 204 ? response.json() : response));
}

async function del(endpoint = '', header = {}, body = {}) {
  return fetch(`${apiUrl}${endpoint}`, {
    method: 'delete',
    headers: {
      ...header,
    },
    body: JSON.stringify(body),
  })
    .then((response) => response);
}
const request = {
  get,
  post,
  del,
  put,
};
export default request;
