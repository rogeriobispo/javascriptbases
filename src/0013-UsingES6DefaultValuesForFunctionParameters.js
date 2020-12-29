var defaultVal = function() {
  return 5;
}
// var multiplyIt = function(num1 = 2, num2 = 5) 

var multiplyIt = function(num1 = 2, num2 = defaultVal()) {
  return num1 * num2
}


console.log(multiplyIt())

console.log(multiplyIt(5))
console.log(multiplyIt(5, 6))
