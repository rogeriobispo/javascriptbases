const isRequired = function(field) {
  throw new Error(`${field} is required`)
}

let multBy5 = function(num = isRequired('num') ) { // to throw an error to a 
  // mandatory param use a funcion as default value
  return 5 * num;
}
console.log(multBy5())
