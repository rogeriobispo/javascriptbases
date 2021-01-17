// it bind a function into a object
// it can also bind arguments to a function


// function test(){ 
//   console.log("test")
// }
// let test2 = test.bind();
// console.log(test2)
// // [Function: bound test]

// test()

let user1 = {
  name: 'John',
}

let user2 = {
  name: 'Bob',
  greet() {
    // console.log(this)
    console.log(`Hello ${this.name}`);
  }
}

// setTimeout(() => user2.greet(), 1000)
let greet = user2.greet.bind(user2) // this on the function will be user2
// bind matain the state of object
setTimeout(greet, 1000)
// user2.greet()

user2.greet = function() { console.log(`Hi ${this.name}`) }
// this change will note afect the bind on line 27


let greet1 = user2.greet.bind(user1)

greet1()
