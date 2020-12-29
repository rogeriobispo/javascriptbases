// indexOf and LastIndexOf

let arr = [1, 5, 6, 10, 11, 12, 13, 14];

console.log(arr.lastIndexOf(5))
console.log(arr.indexOf(5))
// lastIndexOf and indexOf return a negtive number if the value does not exist

// to search a value that is greater than somenthing 
// findIndex and find
// takes a function as the first argument
// returns the index or a value;
// findIndex returns the index
// find returns the value.
// the function may receive three arguments: array element, index array
let arr = [1, 5, 6, 10, 11, 12, 13, 14];
let over30 = function (elem, index, theArray){
  console.log(`${elem} - ${index} - ${theArray}`);
  return elem > 10;
}

console.log(arr.findIndex(over30));


let arr = [1, 5, 6, 10, 11, 12, 13, 14];

const x = arr.find((elem) => elem > 5 && elem < 10)

console.log(x)
