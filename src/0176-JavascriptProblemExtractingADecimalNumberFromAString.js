'use strict';

let phrase =
  'First number is 32, and the second number is 100 and then 15.25 and then 20 as the last number 35.';

const reg = /\d+\.*\d*/g;

const result = phrase.match(reg);

for(let val of result) {
  console.log(Number(val))
}
