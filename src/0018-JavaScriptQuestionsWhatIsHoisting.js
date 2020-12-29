// hoisting
// hoisint refers to variables or function declaration that are lift or raised.
// to the top of the code.
// it means that one can references them before they are declared.
// function expressions does not hoist

hoisting();

function hoisting() { //function declarations as hoisted
  console.log(hoist); //this variable will be hoisted 

  var what = 'Variable and function declarations.';

  console.log('What is hoited? '+ what);
  var hoist = 'to lift or raise up'; //var are hoisted but let does note
  console.log('Hoist means '+ hoist)
}

sum() //function declaration is not hoisted

var sum = function() { //the var sum is hoisted but the function is not
  console.log(a + b)
}

var a = 10,
    b = 5;

sum();
