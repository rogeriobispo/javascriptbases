'use strict'

var objProto = Object.freeze({
  greet: function() {
    console.log(this.greeting + " World")
  }
})


var obj = Object.create(objProto);
obj.greeting = "Hello"

obj.greet = function() { // greet is frozem and won't change
  console.log(this.greeting + " you")
}
obj.greet()
console.log(obj)
