// recursions
// a recursive function call itself
// a recursive function call has two main parts. a terminating conditions and the recursive case
// a recursive function has a terminating condition

var factorial = function factorial(num) {
  if(num === 1) return 1;
  return num * factorial(num -1);
}

console.log(factorial(5))
