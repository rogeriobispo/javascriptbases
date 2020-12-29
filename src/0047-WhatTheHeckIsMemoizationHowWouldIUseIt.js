// memoization is a tecnique that improve performance.
// by caching results
// its expect that your function is a pure function.
// if your function rely on data outside of the func.
// this data may change and its note pure

let num = 5;
let fun = function(x) {
  return num * x //this function is not pure rely on outside num
}

let fun2 = function(x) {
  return x * x //this function is pure it depends on intself
}


const aFunc = function(parameter) {
  'use strict';

  if(!aFunc.memoCache[parameter]) {
    let result = {};
    console.log('Computing it here.');
    //do the computation
    result.parameter = parameter;
    aFunc.memoCache[parameter] = result;
  }

  return aFunc.memoCache[parameter]
};

aFunc.memoCache = {};
aFunc(5)



const aFunc2 = function(par1, par2) {
  'use strict';

  let slice = Array.prototype.slice
  let key = JSON.stringify(slice.call(arguments)); //arguments is a local variabel the references to the argusments passed

  if(!aFunc2.memoCache[key]) {
    let result = {};
    console.log('Computing it here.');
    //do the computation
    result.par1 = par1;
    result.par2 = par2;
    aFunc2.memoCache[key] = result;
  }

  return aFunc2.memoCache[key]
};

aFunc2.memoCache = {};
console.log(aFunc2(5, 6));


let fibonacci = function (){
  'use strict';

  let cache = [0, 1];

  let fib = function(n) {
    let result = cache[n];

    if(typeof result !== 'number'){
      result = fib(n - 1) + fib(n - 2);
      cache[n] = result;
    }
    return result;
  }
  return fib
}()

console.log(fibonacci(90))
