const date = new Date()
const date2 = '2020-10-10';

console.log(typeof date) //object
console.log(date instanceof Date) //date
console.log(new Date(date2) instanceof Date) //date

console.log(Object.prototype.toString.call(date2))
