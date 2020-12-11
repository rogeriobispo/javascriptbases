// Choosing the Right Operator
// == 
// === 
// != 
// !== 

console.log(`Sample 1: a = 1 b = '1' comparison a == b`)
var a = 1,
    b = "1";

if(a == b)
  console.log('there equals')
else
  console.log('there not equals')

console.log(`Sample 1: a = 1 b = '1' comparison a === b`)
var a = 1,
    b = "1";

if(a === b)
  console.log('they are equals')
else
  console.log('they are not equals')


console.log(`Sample 1: a = 1 b = true comparison a == b`)
var a = 1,
    b = true;

if(a == b)
  console.log('there equals')
else
  console.log('there not equals')

console.log(`Sample 1: a = 1 b = true comparison a === b`)
var a = 1,
    b = true;
  
if(a === b)
  console.log('there equals')
else
  console.log('there not equals')
  
console.log(`Sample 1: a; b = null comparison a == b`)
var a,
    b = null;

if(a == b)
  console.log('there equals')
else
  console.log('there not equals')

console.log(`Sample 1: a; b = null comparison a === b`)
var a,
    b = null;

if(a === b)
  console.log('there equals')
else
  console.log('there not equals')

console.log(`Sample 1: a = ''; b = 0 comparison a == b`)
var a = '',
    b = 0;

if(a == b)
  console.log('there equals')
else
  console.log('there not equals')

console.log(`Sample 1: a = ''; b = 0 comparison a === b`)
var a = '',
    b = 0;

if(a === b)
  console.log('there equals')
else
  console.log('there not equals')


// coersion
// the equality operator(==) and inequality operator (!=) coerce the value before comparing
// the strict equality operator(===) and inequality operator (!==) do not coerce the value
