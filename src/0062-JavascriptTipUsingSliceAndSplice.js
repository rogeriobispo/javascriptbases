// slice 
// Returns a portion of the array as a second array.
// does not modify the original array.
// the first argument specifies the starting element
// the second argument specifies the endind element.
// the second argument is optional if it not informed it is the last element of array.
let arr = [1,2,3,4,5,6]

// let arr1 = arr.slice(0,2) // exclude the ending element i this case element 2
// console.log(arr1)
// console.log(arr)

// let arr2 = arr.slice(2, 3)
// console.log(arr2)
// splice
// modifies the array on wich it is invoked
// the first argument specifies the array position for insertion or deletion;
// the second argument indicates the numer of elements to delete.
// the deleted elements are returned as an array;
// the second argument is optional if not informed the end of the array will be used
// Each additional argument is inserted into the array.

// console.log(arr)
// let arr3 = arr.splice(2, 2);
// console.log(arr)
// console.log(arr3)


// let arr3 = arr.splice(2, 0, "A", "B") //return an empty array en insert A e B at position 2;
// console.log(arr3)
// console.log(arr)

let arr4 = arr.splice(2, 1, "C", "D") //return one element deleted and insert c e d on the original array.
console.log(arr4)
console.log(arr)
