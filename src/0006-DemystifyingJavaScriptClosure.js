// JavaScript uses function scope
//  scope refers to the rules that determine where within our program,
// Variables and function are accessible

// var funct =  function funct() {
//   var a = 2,
//       b = 3;
  
//   var funct2 = function funct2() {
//     console.log(a + b);
//   };

//   setTimeout(funct2, 1000)
//   console.log('finished executions')
// }

// funct()

// closure defined
// A closure is the local variables for a function - kept alive after the
// function has returned

// Closure is when a function is able to remember and access its
// lexical scope even when that function is executing outside its
// lexical scope

// A closure is a function having access to the parent scope,
// even after the parent function has closed


(function counter(){
  var cnt = 0,
      item1 = document.getElementById('btn1'),
      item2 = document.getElementById('btn2');

  var print = function print() {
    console.log(cnt);
  }


  item1.addEventListener('click', function count1(){
    cnt++;
    print()
  })


  item2.addEventListener('click', function count2(){
    cnt++;
    print()
  })
}())

// module pattern represents closure

var APP = (function module(){
  var a = 3;

  var printIt = function printIt(val){
    console.log(val);
  }

  var sumIt = function sumIt(b){
    printIt(a + b);
  }

  var multiplyIt = function multiplyIt(b) {
    printIt(a * b);
  }

  return {
    sumIt: sumIt,
    multiplyIt: multiplyIt
  }
})()
