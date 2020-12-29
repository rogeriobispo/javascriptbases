// Promises is an object with properties and methods
// represents the eventual completion (or failure) of an asynchronous operation.
// provides a resulting value;
// a promise cam be pending and resolved
// pending when it still processing. ou waiting for process
// resolved when it has already precessed
// promises returns a velue.
// for rejection our resolutions
//  the then method is executed when promise is resolved
// the catch method is executed when promise is rejected

// asyncFunction()
//   .then(result => {
//     console.log(result);
//     return asyncFunction2();
//   })
//   .then(result => console.log(result)); // promisses chaining

import fetch from 'node-fetch';
  const api = "https://my-json-server.typicode.com/typicode/demo/posts"
fetch(api)
  .then(response => {
    return response.json();
  }).then(data => console.log(data))

  fetch("http://error.com")
    .catch(err => console.log(err))
