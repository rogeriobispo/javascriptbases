 import Big from 'big.js'
// console.log(0.1 - 0.3); // 0.1999999
// console.log(((0.1 * 10) - (0.3 * 10)) / 10) // * 10 to transform on integer
// console.log(2232.0 * 0.1);
// console.log((22322.00* 100) * (0.1 * 10) / 1000) // making this you probably will made mistake.
const x = new Big(100.9)
const y = new Big(20.3)
console.log(x.minus(0.1).valueOf()); // will return 100.8 

// thereis some library to help with this.
