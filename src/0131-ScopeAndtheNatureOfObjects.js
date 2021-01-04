'use strict';

function test(val) {
  //primitive value is passed as value
  val = val + 1;
}

let val = 10;
test(val);
console.log(val); // will print 10

function test2(myArr) {
  // array is passed by reference
  myArr.push(4);
}

let myArr = [1, 2, 3];
test2(myArr);
//console.log(myArr); // will print 123456
// objects in javascript is passed as references


function test3(arr1, arr2) {
  arr1 = arr2; // this does not reference arr1 to arr2
  // arr1 is at other scope of outside arr1
}


let arr1 = [1, 2, 3];
let arr2 = [4, 5]

test3(arr1, arr2)
console.log(arr1)
