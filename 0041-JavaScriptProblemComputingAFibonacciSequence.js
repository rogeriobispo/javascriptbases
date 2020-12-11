

let endFib = 15;
let fib = [0, 1]

let calcFib = function calcFib() {
  if(fib.length < endFib){
    fib.push(fib[fib.length - 2] + fib[fib.length - 1])
    calcFib();
    return fib;
  } else {
    return;
  }
}

console.log(calcFib())
