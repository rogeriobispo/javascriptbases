let test = 'name' * 5;
let test2 = 'name' * 5;
let str = 'This is not a number';

console.log(test);
console.log(test2);
console.log(test === test2);
console.log(isNaN(test))
console.log(Number.isNaN(test2))
console.log(isNaN(str)) // isNaN will return true if the variable is nan or will be nan.
console.log(Number.isNaN(str)) // return false 'cause Number.isNaN returns true only it is NaN currently.
console.log(Object.is(test, test2)) // verify if they are equals.
