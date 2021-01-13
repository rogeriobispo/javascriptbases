// condition shorthand
let bool = true;


if(bool) {
  console.log('it is true')
}

let str = "String"

if(str) {
  console.log('it has an value')
}

let str2 = ''
if(str2) {
  console.log('String has value')
}

if(!str2) {
  console.log('Does not have string value')
}

// falseys values value: 0 null undefined -0 false, NaN  '' all are availiable to false

const a = 0 && 1 // the value is evaluited as true is returned
//a = 1
const b = 1 && 10 // the last value that is evalueted to true is returned
// 10

let responseText =  ''

console.log(responseText && 'This is the response') // will print nothing cause responseText is empty string that
// is evaluated to false

let score = 70;

let finalMessage =  (score > 60) ? 'Congratulations! You passed.' : 'Please retake the course'

console.log(finalMessage)
