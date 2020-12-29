// methods to iterate an array
// every all elements of array should attend some criteria
// some, some of elements should attend a criteria
let arr = [1, 2, 3, 4, 5];
console.log(arr.every(value => value < 10)) //will return true

console.log(arr.every(val => {
  console.log(val)
  return val < 3
})) //every will stope as sum as a false happen 


console.log(arr.some(val => isNaN(val))) // will return true if any of then is not a number
// 


arr.unshift('A') //add an element on the first position
console.log(arr.some(function(val) { //will iterate only the first element and will return true
  console.log(val)
  return isNaN(val)
}))

let ans = "Life is trying things to see if they work."

let cAns = "Life is trying things to see if they work."

let checkMatch = function(resp, corr) {
  return corr.every(function(word, index) {
    return word.toLowerCase() === resp[index]
  })
}

let result = checkMatch(cAns.split(' '), ans.split(' ')); 

console.log(result)
