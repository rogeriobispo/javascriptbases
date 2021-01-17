const greeting = function(greet, name) {
  return `${greet} ${name}`;
}


const morningGreeting = greeting.bind(null, 'Morning'); //will bind the Morning param

const normingGreetingForJhon = greeting.bind(null, 'Morning', 'John')

console.log(morningGreeting('rogerio'))
console.log(normingGreetingForJhon())


const getPowerOfExponent = function(exponent, num) {
  return num**exponent
}

const getPowerOfExponent2 = getPowerOfExponent.bind(null, 2)
console.log(getPowerOfExponent2(5))
