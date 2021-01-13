const sum = function() { // arguments is not present on array functions
  let total = 0;
  for(let i of arguments) {
    total += i;
  }
  return total;
}


console.log(sum(30, 40, 50, 80, 100, 90))


const func2 = function(...args) { // spreed operador will work with array functions
  return args.reduce((acc, val) => acc + val, 0);
}


console.log(func2(30, 40, 50, 80, 100, 90))
