// map method.
// will create a new array from  the current array without alter the current.

let nums = [1 , 5, 6, 10, 11, 12, 13, 14];

let square = nums.map(num => num ** 2)
let quad = nums.map(num => num ** 2).map(num => num ** 2)
console.log(nums)
console.log(square)
console.log(quad)


let obj = nums.map((value, index , arr)=> { 
  return {
    index: index,
    value: value,
    squera: value ** 2,
    cube: value ** 3,
    origArray: arr
  }
})

console.log(obj)
