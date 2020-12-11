// The term first-class means that something is just a value.
// A first-class function is one that can go anywhere that any other value can go
// there are few to no restrictions

// a number can be stored in a var so can a function.
const a = 10;
const func = function() { //function expression
  console.log('Function stored on a var');
}

func();

// a number can be stored in a array and so can a function
var arr = [28, function() { console.log('function stored on a array')}]

arr[1]()

// a number can be stored in a object and so can a function
const obj = {
  num: 20,
  funct: function(){
    console.log('function stored on a object');
  }
};

obj.funct()

// a number can be created as needed and so can a function
console.log(28 + (function(){return 10})())

// a number can be passed to a function and so can a function
const addTwo = function(num, fn) {
  console.log(num + fn())
}
addTwo(28, function(){return 28} )

// a number can returned from a function and so can a function

const returnNumber = function() { return 28; }
const returnFun = function() { 
  return function(){ 
    console.log('hellos from returned function')
  }; 
}
const newFun = returnFun();
newFun();
returnFun()()
