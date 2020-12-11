// all things are passed by valeu however.
// in case an object is a reference. 

// primitive values is passed bay value
var num1 = 10,
    num2 = num1;
num1++
console.log(num1)
console.log(num2)// num não é afetado pois é por valor.

// objects is passed by references
var obj1 = {
  num: 10,
  name: 'Steven'
};

obj2 = obj1;

obj2.name = 'Rogério' //object one and object two is changed is passed by reference
obj2.num++;

console.log(obj1)
console.log(obj2)


var fun1 = function(){
  console.log(obj1.name);
}

var fun2 = fun1;
fun2.invoked = true //function is passed by reference
console.log(fun1.invoked)
console.log(fun2.invoked)

var fun3 = function(term){ // passado por referencia object
  term.num++
  console.log("function: " + term.num)
}

console.log("before:" + obj1.num)
fun3(obj1)
console.log("after: "+ obj1.num)
