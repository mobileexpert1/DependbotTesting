import {BASE_URL} from './enviorment';
/*--- For handleling all get requests----*/
export const API_GET = (END_POINT) =>
  new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'text/json');
    fetch(BASE_URL + END_POINT, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => resolve(response.json()))
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  });

/*--- For handleling all post requests----*/
export const API_POST = (END_POINT, body, isFile = false) =>
  new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append(
      'Content-Type',
      isFile ? 'multipart/form-data' : 'text/json',
    );
    fetch(BASE_URL + END_POINT, {
      method: 'POST',
      headers: headers,
      body: isFile ? body : JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  });
