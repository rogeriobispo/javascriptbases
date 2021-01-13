let str = "98";
console.log(typeof +str); //coercion its a number

let str2 = "98 meter"
console.log(+str2); //not a number

console.log(parseInt(str2, 10)) //convert to string. ignore meter
console.log(parseFloat(str2)) //convert to string. ignore meter

let str3 = '98 meters of 100';
console.log(parseInt(str3, 10)) //convert to string. ignore meter
console.log(parseFloat(str3)) //convert to string. ignore meter

let str4 = "I finished 68.8 of the 80.8 total";

let arr = str4.split(' ').filter(value => !isNaN(value)).map(value => Number(value))

console.log(arr)
