let arr = [1, 2, 3, 4, 5]

console.log(Math.min(...arr))
console.log(Math.max(...arr))

// for non suported es6 use apply method.
console.log(Math.min.apply(null, arr)) // first param is the value of this
