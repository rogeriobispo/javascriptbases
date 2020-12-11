// diference null and undefined
// both are types that represente absence of values;
typeof undefined // "undefined"
typeof null // 'object'

// Declared variable withou an assigned value.
var i;
console.log(i) //undefined

//A property that does not exists on a object.
var obj = {}
console.log(obj.name) //undefined

//return from a function without a value
var test = function(){
  return;
}
console.log(test()) //undefined

//Function parameters that are not provided with an argument
var test2 = function(num) {
  console.log(num) //undefined
}

test2()

// undefined represents an absence of value. Assigned by the systeem so you should let
// undefined just happen

// null represents an absence of value assigned by the program if your are assigning an absence of values
// use null;

var a;

if(!a) { // it verify if its is undefined may cause problems when its zero for instance
  a = 100;
}

if(a === undefined) { //it verify if its undefined
  a = 1000;
}

if(typeof a === 'undefined') { 
// without typeof if the variable is not declared will get an reference error
  a = 10000;
}
console.log(a)
