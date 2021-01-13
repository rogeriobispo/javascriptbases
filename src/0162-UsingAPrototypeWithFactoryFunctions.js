// how to use prototype with a function factory

const objProto = {
  greet() {
    console.log(this.greeting);
  }
}
const greeting3 = function (greeting) {
  let greetCnt = 1000;
  let obj = Object.create(objProto)
  obj.greeting = greeting;
  obj.getGreetCount = function () {
    return greetCnt
  }
  return obj;
};

var greet3 = greeting3('Ola mundo');
greet3.greet()
console.log(greet3.getGreetCount())
