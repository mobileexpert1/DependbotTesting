/*---set _PROD_ to true for production --*/
const _PROD_ = false;
const PROD_URL = '';
const DEV_URL = 'https://jsonplaceholder.typicode.com/';
export const BASE_URL = _PROD_ ? PROD_URL : DEV_URL;
