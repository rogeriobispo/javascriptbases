let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let i = 0
// while(i < arr.length) { // its note cool
//   console.log(arr[i++])
// }


//do while loop
// i = 0;
// do {
//   console.log(arr[i++])
// } while(i < arr.length) //do while always runs at least once


// //for loop
// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }

// // for in loop
// for(let index in arr){
//   console.log(arr[index])
// }

// for of loop
// for(let value of arr){ // the value is returned
//   console.log(value)
// }

//Methods of array forEach

arr.forEach(value => console.log('value ', value))


// Iterator

const it = arr[Symbol.iterator]()
console.log(it.next())
