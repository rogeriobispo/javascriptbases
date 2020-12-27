'use strict';
// "strict mode"
// point errors its more retritive way
// you can use on the entire file or just an function.


let test = function(i1, i1){ //error pass the same param name
  "use strict";

  x = 3.14 //error the variable will be att the global namespace.
  let obj = {
    y: 90
  };

  Object.defineProperty(obj, "y", { writable: false });

  obj.y = 100 //points an error because writable is false. for y

  console.log(obj.y)
}

test()
