// the code blocking de executions

'use strict';
let start = Date.now();
let i = 0;

let preventBlock = function(callback) {
  setTimeout(function() {
    if(typeof callback === 'function'){
      callback();
    }
  }, 0)
}

console.log('Initializing')
let count = function() {
  for (let j = 0; j < 100000000; j++) {
    i++;
  }
  console.log('Finished')
  console.log(Date.now() - start)
}
preventBlock(count);
console.log(Date.now() - start)
