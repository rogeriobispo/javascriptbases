//symbol is availabel on is6  
// symbol is a new primitive tipe on javascript
const symb1 = Symbol('description of the symbol')
console.log(typeof symb1)
let obj = {
  [symb1]: new Date(),
  name: 'Rogerio'
}
console.log(obj[symb1])
for(let i in obj) {
  console.log(i)
  console.log(obj[i])
}

console.log(Object.keys(obj))


const symbol2 = Symbol.for('Object Data')

let obj2 = {
  name: 'foo',
  [symbol2]: new Date()
}

console.log(Symbol.keyFor(symbol2))
