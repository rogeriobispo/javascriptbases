"use strict"

let num1 = 0;
let num2 = 1;

// change number 
// let temp;

// temp = num1;
// num1 = num2;
// num2 = temp;

// console.log(num1, num2);


// other way to change number destructuring

[num1, num2] = [num2, num1] //number 2 (1) is set on variable num1 and num1 (0) is set on variable num2

console.log(num1, num2);