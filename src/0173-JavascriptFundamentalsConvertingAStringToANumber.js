// 3 ways to convert strint to number
const n1 = '19'
const n2 = '20'

console.log(n1 * n2) // multiplication wil coerse the number ok

console.log(n1 + n2) // this will concatenate

console.log(+n1 + +n2) // the plus before coerce the number 

console.log(parseInt(n1) + parseInt(n2)) // converte the number
console.log(parseFloat(n1) + parseFloat(n2)) // converte the number
console.log(Number(n1) + Number(n2)) // converte the number

// some tests
console.log('Some testes')
console.log('5', +'5') //number
console.log('5aa', +'5aa') //NaN
console.log('aa5', +'aa5') //NaN
console.log('5',parseInt('5')) //number
console.log('5aaaa',  parseInt('5aaaa')) // number
console.log('aaa5',  parseInt('aaa5')) // NaN
console.log('5',  parseFloat('5')) //number
console.log('5aaaa',  parseFloat('5aaaa')) // number
console.log('aaa5',  parseFloat('aaa5')) // NaN
console.log('5',  Number('5')) //number
console.log('5aaa',  Number('5aaaa')) // number
console.log('aaa5',  Number('aaa5')) // NaN
