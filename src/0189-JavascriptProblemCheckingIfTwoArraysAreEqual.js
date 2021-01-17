const checkArrays = function(arr1, arr2) {
  // return arr1 === arr2
  // return arr1.toString() === arr2.toString()
  return arr1.length === arr2.length && arr1.every((val) => arr2.includes(val) )
}


console.log(checkArrays([1,2,3,1], [2,3,1,3]))


const checkArrays2 = function(arr1, arr2) {
  return arr1.length == arr2.length && arr1.every((arr1_value, index) => arr1[index] === arr2[index])
}


console.log(checkArrays2([1,2,3], [1,2,3]))
console.log(checkArrays2([1,2,3,1], [2,3,1,3]))
