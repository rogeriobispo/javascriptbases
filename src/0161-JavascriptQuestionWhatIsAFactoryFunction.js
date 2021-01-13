// Factory Function is is an function that
// returns an object without the keyword new.
//  with you need the prototype does not use factory function

const factoryFun = function (newNum) {
  let num = 100;
  return {
    sum() {
      return num * newNum;
    },
  };
};

const obj = factoryFun(5);
console.log(typeof obj);
console.log(obj);
console.log(obj.sum());


class Greeting1 {
  constructor(greet) {
    this.greeting = greet;
  }

  greet() {
    console.log(this.greeting);
  }
}

//function contructor
const Greeting2 = function (greet) {
  this.greeting = greet;
  this.greet = () => console.log(this.greeting);
};

const greet1 = new Greeting1('Hi');

const greet2 = new Greeting2('Hello');
