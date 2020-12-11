console.log(doSomething)
doSomething()

function doSomething() {
  console.log('Function declaration or statement')
}

console.log(someFunction) 
someFunction() // this function expression does not exist it is not hoisted

var someFunction = function() {
  console.log('Function Expression with anonimous function')
}

console.log(someFunction2)
someFunction2() // this function expression does not exist it is not hoisted

var someFunction2 = function something() {
  console.log('Function Expression with named function')
}


var runIt = function(a) {
  console.log(a)
  a();
}

runIt(function(){
  var b = 'now';
  console.log('Running ' + b);
})
