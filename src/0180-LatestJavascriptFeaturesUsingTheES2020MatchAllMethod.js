const str = 'If life were predictable it would cease to be life and be without flavor.'

const regExp = /[aeiou]/g

const it = str.matchAll(regExp) // match returns an array, 
// matchAll returns an 

console.log(it)
// console.log(it.next())
// console.log(it.next())
// for(let val of it) is good ot iterators
