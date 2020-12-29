const word = 'Rogério nasceu 11 do 8 de 1983'
const numbers = word.split(' ').filter(value => !isNaN(value)) //with loop
console.log(numbers)
console.log(word.match(/\d+/g)) //the best way to do with regexp
// match returns an array of the numbers found
