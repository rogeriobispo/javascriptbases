let array = [1, 2, 3, 4, 5, 6];

array.push(10, 100, 200); // add to the end of the array

const removedValue = array.pop() // remove to the end of array
// console.log(removedValue)

array.unshift(100, 300, 500) //add to te begining of the array

const removedValueShift = array.shift(); //remove from the begining of the array
console.log(array)


// push adds one or more elements to the end of an array and retuns the new length
// pop removes an element from the end of an array and returns that element
// unshift adds one or more elements to the begining of an array and returns the new length
// shift removes an element from the begining of an array and returns that element
