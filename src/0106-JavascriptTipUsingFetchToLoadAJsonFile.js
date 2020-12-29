import fetch from 'node-fetch';
const body = {
  name: 'Rogerio',
  lName: 'Santos'
}
const myInit = {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'content-type': 'application/json',
  },
  mode: 'cors',
  cache: 'default',
};

const myRequest = new fetch.Request('http://localhost:3001/webhook', myInit);

fetch(myRequest)
  .then(value => console.log(value))
  .catch(error => console.log(error));
