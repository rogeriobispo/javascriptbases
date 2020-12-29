'use strict';

let test = function () {
  setTimeout(function () {
    console.log('start of the code');

    console.log('Notice me!');

    console.log('End of code');
  }, 10);
};

let test2 = function () {
  console.log('Now I get attention!');
};

test(); // this will executed after there is a setTimeout deleying the execution
test2();
