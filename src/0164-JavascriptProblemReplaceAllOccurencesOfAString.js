const str = 'The array in Javascript is quite flexible, you can find arrays all over,'+ 
'Array is an important data structure in javascript.'


let newStr = str.replace('array', 'object') //only replace the firs ocurrence
// console.log(newStr) 
let newStr2 = str.replace(/array/ig, 'object ')
//replace all occurrences of array
// console.log(newStr2)

let newStr3 = str.split(/array/gi).join('object')
console.log(newStr3)
