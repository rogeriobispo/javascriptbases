var arr = [100, 50, 0, 90, 75, 80, 30]

const iterator = arr[Symbol.iterator]()
console.log(iterator)
console.log()
let result = iterator.next()

while(!result.done) {
  console.log(result)
  result = iterator.next()
}
// one can use iterator with string maps sets.
