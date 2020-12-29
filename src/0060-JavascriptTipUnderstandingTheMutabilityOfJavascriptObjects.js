// javascript objects are mutable
// arrays and function are object in javascript

const obj = { //const prevent to reassing this object
  number: 10
};

const obj1 = obj;

obj1.number++ //this alter both objects

console.log(obj1)
console.log(obj)
console.log(obj === obj1) // verify the object memory addres for equality

const obj2 = { 
  number: 10
}

console.log(obj2)
console.log(obj === obj2)
// ____________________________________________________________________________//
let newObj = {
  total: 65,
  increment: 1
}

const incrementTotal = function(obj, val) {
  obj.increment = val;
  return function(){
    console.log(obj.total);
    obj.total = obj.total + obj.increment;
    console.log(obj.total);
  }
}

const incBy1 = incrementTotal(newObj, 1);
const incBy2 = incrementTotal(newObj, 2);

incBy1(); // will be increment by 2 because the newObj is changed to increment 2;

// objects are passe by reference


const x = 1;


const incrementPrimitive = function(val, inc) {
  return function() {
    return val + inc;

  }
}


const incprim1 = incrementPrimitive(x, 4);
const incprim2 = incrementPrimitive(x, 6);

console.log(incprim1()); // will be increment by 4 primitive values are passed as value
console.log(incprim2()); // will be increment by 6 
