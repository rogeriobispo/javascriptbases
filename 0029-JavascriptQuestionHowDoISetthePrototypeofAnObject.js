// 3 ways to set the prototype object
// 1 Using a contructor function
// 2 Using Object.create(prototype)
// 3 Using Object.setPrototypeOf(obj, prototype) -- ES6 


var objProto = {
  greet: function() {
    console.log(this.greeting + ' world! ');
  }
};


// using contructor function

var Greeting = function(term) {
  this.greeting = term;
}

Greeting.prototype = objProto

new Greeting("Hello").greet()

// object.create
var obj2 = Object.create(objProto);
obj2.greeting = "Howdy"
obj2.greet()

// es6 way to create prototype

var obj3 = {
  greeting: 'Hello'
}

Object.setPrototypeOf(obj3, objProto)

obj3.greet()
