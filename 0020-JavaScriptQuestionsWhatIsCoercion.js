25 * true //=> true coerce to one
26 * false //=> false coerce to zero
//  - * /  % converte values to numbers
5 - "1" //result will be four
5 + "1" // contactents
5 + true // converts to one
// truthiness
var i = 10;

if(i){ //var with values returns true
  console.log("it is true")
}

// there is only seven value that converts to false on javascript.
// false is false
// 0 is false
// -0 is false
// "" empty string is false
// NaN is false
// null is false
// undefined is false

var x;
if(!x){ // undefined returns false
  console.log('It is false')
}

if(typeof i === 'undefined') {
  // this check is better because zero is false it may cause issues
}
