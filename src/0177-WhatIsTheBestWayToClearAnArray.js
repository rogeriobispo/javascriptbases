let arr = [30, 50, 80, 95, 100, 60, 70]


console.log(arr)

while (arr.length > 0 ) {
  arr.pop() // remove from the end of array
}

while (arr.length > 0 ) {
  arr.shift() // will remove from the bigining of array
}

// splice remove and add elements.

arr.splice(0, arr.length) // remove all elements from
// the methods above is the slowest way to

copyArr = arr
arr = [] // the faster way 
// this will not clear copyArr when whe reasing this point to another memory space

arr.length = 0 // the faster way
// this will clear both arr and copyArr

console.log(arr)
