const test = [5, 6, 7, 4, 5, 8, 7, 5, 2];

const indexEvery = function(arr, val) {
  return arr.reduce((acc, elm, elmIndex) =>(elm === val) ? [...acc, elmIndex] : acc , [])
}

const index = indexEvery(test, 5)
console.log(index)
