// creating promises
// a promise receives two function rejects and resolve

const myPromise = new Promise((resolve, reject, failed = false) => {
  if (failed) return reject('falhou');

  setTimeout(function () {
    resolve('Done');
  }, 4000);
});

myPromise.then(result => console.log(result)).catch(err => console.log(err));

let asyncFunction = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('asyncFunction has resolved');
    }, 4000);
  });
};

let asyncFunction2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('asyncFunction2 is done');
    });
  });
};

asyncFunction()
  .then(result => {
    console.log(result);
    return asyncFunction2();
  })
  .then(result => console.log(result)); // promisses chaining


let setTimeoutP = function(time) {
  return new Promise((resolve, reject) => {
    if(isNaN(time)) reject('falhou')
    setTimeout(resolve, time);
  })
}


setTimeoutP('A2000')
.then(() => console.log('Done'))
.catch(reject => console.log(reject))
