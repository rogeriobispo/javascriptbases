// javascrits uses typecoersion for coverting a value to a boolean

let somevar;
if(somevar !== undefined && somevar !== null && somevar !== ''){
// if(!somevar) is the same above because seven values evaluate to falsy
  console.log('Do something with the value');
}

// there only seven values that values that convert to falsy on js.
// false
// null
// undefined
// 0
// -0
// NaN
// empty string

// we must take a good care with zero.

someVar = 0

if(someVar){
  console.log(someVar)
}

console.log(undefined === null)

// some truthy value we must take a good care with
// {} empty object avaluet to truee
// [] empty array avaluet to true
//  -5 negative number avaluet to true
