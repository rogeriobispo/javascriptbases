//  the proporse of delete is to remove a property from an object.
// you can not delete a variable with delete.

var obj = {
  prop: 'test',
  prop2: 'test2'
};

console.log(obj.prop)
console.log("prop" in obj)
console.log(obj.hasOwnProperty('prop'))

delete obj.prop
console.log(obj.prop)
console.log("prop" in obj)
console.log(obj.hasOwnProperty('prop'))

// take care with delete with array. 

var arr = [1, 2, 3]

console.log(arr.length)

delete arr[1]

console.log(arr.length)
//  after delete array turn like this [ 1, <1 empty item>, 3 ]
console.log(arr[1]) // returns undefined

// use delete to remove a property from an object
// to delete elements on an array utilize splice or others methods from array
// delete does not delete variables.
