// what is prototypes
// Almost every object is linked to another object
// that linked is called the prototype
// the default object is not linked to prototype
// Object inherits properties and methods from it's prototype ancestry
// a prototype is automatically assigned to any object
// you can define an object prototype
var obj = {};
obj.toString = function() { //when a method is overridden the prototype method is not called
  console.log('Overrided')
}
console.log(obj.toString()); // to string came from prototype
console.log(obj.__proto__);

var arr = [1, 2, 3]

console.log(arr.indexOf(2)) // indexOf came from prototype
