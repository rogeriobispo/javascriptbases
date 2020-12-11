// escope defines the visibility of a var function.
// Scope is determined lexically.
// javascript utiliza function scope
// nested functions create nested scopes

var a = 10;

var add5 = function(num) {
  var b = 5;

  console.log(num + b);

  var add10 = function(num2) {
    console.log(num2 + a);
  }

  add10(3);

  var add15 = function(num3) {
    var c = 15;
    console.log(num3 + c);
  }

  add15(3)
}

add5(3)
