let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


let arrayShuffle = function(arr) { // the original array is changed
  // this is passed as references to the function
  let newPos;
  let temp;

  for(let i = arr.length -1; i > 0; i--) {
    newPos = Math.floor(Math.random() * (i + 1))
    temp = arr[i];
    arr[i] = arr[newPos];
    arr[newPos] = temp
  } 
  return arr
}

console.log(arrayShuffle(arry))
console.log(arry)
