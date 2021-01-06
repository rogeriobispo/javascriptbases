'use strict'
var test = 10
this.test = 20;
console.log(this.test)
console.log(test)


function fun() {
  var test = 12;
  console.log(fun.test)
  console.log(test)
}
fun.test = 15;
console.log(this);
fun()
