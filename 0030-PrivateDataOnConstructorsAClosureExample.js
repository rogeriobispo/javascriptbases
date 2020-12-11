// Object are mutable on javascript
// Private Data on constructor

var objProto = {
  greet: function() {
    console.log(this.greeting+ ' World!');
  }
};


var Greeting = function(term) {
  this.greeting = term;

  var priv = new Date();
  console.log(priv);
  this.privDate = function() {
    return priv;
  }
}

Greeting.prototype = objProto;

var obj1 = new Greeting('Howdy')
obj1.greeting = "consigo mudar esta merda"
obj1.greet()

setTimeout(function() {
  obj2 = new Greeting('Hi')
}, 3000)
