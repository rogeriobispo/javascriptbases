'use strict';
// version with string
// let centFromYear = function (year) {
//   let parts = (year / 100).toString().split('.');
//   if (parts[1]) {
//     return Number(parts[0]) + 1;
//   } else {
//     return Number(parts[0]);
//   }
// };
// version with to string
// let centFromYear = function (year) {
//   let yearStr = year.toString();
//   let cent = yearStr.substring(0, yearStr.length - 2);
//   let reg = /00$/;
//   if (reg.test(yearStr)) {
//     return Number(cent);
//   } else {
//     return Number(cent) + 1;
//   }
// };

let centFromYear = function (year) {
  if (year % 100 === 0) {
    return (Math.floor(year / 100));
  } else {
    return (Math.floor(year / 100) + 1);
  }
};

console.log(centFromYear(45) === 1);
console.log(centFromYear(1888) === 19);
console.log(centFromYear(1905) === 20);
console.log(centFromYear(1700) === 17);
console.log(centFromYear(2001) === 21);
console.log(centFromYear(100) === 1);
