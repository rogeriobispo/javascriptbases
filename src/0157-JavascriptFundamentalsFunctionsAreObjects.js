// function are objects

function helloWorld() {
  console.log('Hello World')
}

helloWorld.description = 'Hello World message'
helloWorld.newFunc = () => console.log('new func')
helloWorld.newFunc()
// console.dir(helloWorld.toString())

var helloWorld2 = function(val) {
  console.log(val)
}

console.log(helloWorld2.length) //returns a quantity of parameters
