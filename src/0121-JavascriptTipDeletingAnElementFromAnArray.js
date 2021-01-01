'use strict'

// delete is used to delete proporties on objects
// delete does note delete variables
let arr = [1, 2, 3, 4, 5, 6]

// delete arr[2]
// this will left a empty item on array
// its better to set null instedof deleting.
// arr.splice(2, 1) //first param is the postion to start remove and second is the quantity of elements to remove
// at this sample delete from element 2 and remove 1 so only de element 2

const removeElement = function(arr, index){ // this function is just for not mutating the original array
 let newArray = [...arr] 
  newArray.splice(index, 1)
  return newArray
}
console.log(removeElement(arr, 2))
console.log(arr)
