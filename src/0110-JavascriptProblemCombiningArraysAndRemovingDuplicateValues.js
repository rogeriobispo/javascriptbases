
let obj = { name: "Steven" }
let obj2 = obj; //obj2 and obj points to the same reference and will be considered equal
let obj3 = { name: "Steven" }

let array1 = [ "james", "Mary", "Tony", "Keyvan", "Anna", obj2]
let array2 = ["Steven", "Gabe", "Esther", "Mary", "Anna", obj, obj3] // set will not remove duplication for object with same value.
// only object point to same reference
let array3 = array1.concat(array2)
let array4 = [...array1, ...array2]
let array5 = array1 + array2 //will be a string.

let set = new Set([...array1, ...array2]) //at this point will remove duplications
let newArray = [...set ]  // will be an array again
console.log(newArray)
