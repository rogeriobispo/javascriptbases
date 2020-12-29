
let obj = { name: "Steven" }
let obj2 = obj; 
let obj3 = { name: "Steven" }

let array1 = [ "james", "Mary", "Tony", "Keyvan", "Anna", obj2]
let array2 = ["Steven", "Gabe", "Esther", "Mary", "Anna", obj, obj3]
let array3 = array1.concat(array2)
let array4 = [...array1, ...array2]
let array5 = array1 + array2 //will be a string.

let prepareArray = function(array) {
  return array.map(value => {
    if(typeof value === 'object' && value !== null) { //null typeof is object
      return JSON.stringify(value);
    } else {
      return value;
    }
  })
}


let set = new Set([...prepareArray(array1), ...prepareArray(array2)]) //at this point will remove duplications
let newArray = [...set ]  // will be an array again
console.log(newArray)
