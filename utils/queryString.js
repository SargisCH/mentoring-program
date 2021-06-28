import querystring from 'querystring';

export const objToQueryString = (queryObject) => querystring.stringify(queryObject);
export const queryStringToObj = (string) => querystring.parse(string);