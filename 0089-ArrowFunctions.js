// arrow function es6 feature
// arrow function is always a function expression

const func1 = () => {
  console.log(this) //'this' is the local object
}

const func2 = function(){ 
  console.log(this) //'this' is the local object
}

function func3(){ // function declaration 
  console.log(this) // 'this' is the global object
}

let greeting = (name) => {
  return "Hi " + name;
}

let greeting2 = name => 'Hi '+ name // is the same function above


console.log(greeting('Rogério'));
console.log(greeting2('Rogério'));

let arr = [1, 5, 6, 10, 11, 12, 13, 14];

let arr2 = arr.map(value => value * 2)
console.log(arr2)
