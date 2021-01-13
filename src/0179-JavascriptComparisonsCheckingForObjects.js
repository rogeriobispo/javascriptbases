// console.log(typeof {}) //object
// console.log(typeof []) //object
// console.log(typeof function(){}) // function
// console.log(typeof null) //object
// console.log(typeof new Date()) // object
// console.log(typeof new RegExp()) //object
// console.log(typeof 'akdjfkldjf') //string
// console.log(typeof 9) //number
// console.log(typeof Symbol('ola mundo')) //Symbol
// console.log(typeof true) //boolean
// console.log(typeof false) //boolean
// console.log(typeof undefined) //undefined

function test() { console.log('done'); }
const map = new Map();
const date = new Date();

const isObject = obj => obj === Object(obj)
console.log('isObject(null)',isObject(null))
console.log('isObject([])',isObject([]))
console.log('isObject({})',isObject({}))
console.log('isObject(test)',isObject(test))
console.log('isObject(map)',isObject(map))
console.log('isObject(date)',isObject(date))

const isObjectLike = val => val !== null && typeof val === 'object'
console.log('isObjectLike(null)',isObjectLike(null))
console.log('isObjectLike([])',isObjectLike([]))
console.log('isObjectLike({})',isObjectLike({}))
console.log('isObjectLike(test)',isObjectLike(test))
console.log('isObjectLike(map)',isObjectLike(map))
console.log('isObjectLike(date)',isObjectLike(date))

const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object
console.log('isPlainObject(null)',isPlainObject(null))
console.log('isPlainObject([])',isPlainObject([]))
console.log('isPlainObject({})',isPlainObject({}))
console.log('isPlainObject(test)',isPlainObject(test))
console.log('isPlainObject(map)',isPlainObject(map))
console.log('isPlainObject(date)',isPlainObject(date))
