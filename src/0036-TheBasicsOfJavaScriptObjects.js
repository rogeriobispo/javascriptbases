// everything is object in js except primitive type aren't
// an object is a collection of values;
// values of an object can be string numbers function array. Array
// objects
// there are 3 way of creating an object 
const x = new Object()
const y = {};
const z = Object.create({})
var fun1 = new Function("console.log('hello World');");
fun1()
console.log(x,y,z)
const w = []
w.name= 'rogerio'
console.log(w)
x.name = 'rogerio'
x.lastName = 'Santos'

console.log(x)
