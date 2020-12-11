// the main diference is how the var is escoped
// var declared with var is the function or the global environment
// variables declared with let is the code block
// variables declred with let are not hoisted

var func1 = function() {
  console.log(`1: ${x}`)
};


func1();
var x = 10;

var func2 = function() {
  for (let i = 0; i < 10; i++)
    console.log(i)

  console.log(i)
}

func2()
