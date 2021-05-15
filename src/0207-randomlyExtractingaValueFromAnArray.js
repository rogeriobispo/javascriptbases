
const arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function* randoElement(arr) {
  let elem,
      len = arr.length
  while( len > 0){ 
    let rand = Math.floor(Math.random()* len)
    elem = arr.splice(rand, 1)[0];
    yield elem
    len = arr.length
  }
}


console.log(randoElement(arr).next())
console.log(randoElement(arr).next())
console.log(randoElement(arr).next())
console.log(randoElement(arr).next())
console.log(randoElement(arr).next())
console.log(randoElement(arr).next())
console.log(randoElement(arr).next())
console.log(randoElement(arr).next())
console.log(randoElement(arr).next())
console.log(randoElement(arr).next())
console.log(randoElement(arr).next())