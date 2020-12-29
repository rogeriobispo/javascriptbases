// spread operator (...)


let students1 = ['james', 'bob', 'Jhon'];

let students2 = ['Rogerio', 'Denise', 'Heloása', ...students1] //join the 2 array at same level

console.log(students2)


let info = {
  age: 34,
  gender: 'M'
}

let user = {
  name: 'Rogerio',
  lastName: 'Bispo',
  ...info // join the object info in the same level
}


console.log(user)


let score = [100, 20, 35, 0, 95, 85, 75, 60];
console.log(Math.max(...score))

let arr1 = [1, 2, 3]

// let arr2 = arr1; // both array points to same memory address
let arr2 = [...arr1] // will create a new array
arr1.push(4)
console.log(arr2)


let fun1 = function(...args) { // will join all params on one array onf arguments
  console.log(args)
}

fun1()
fun1(1, 2, 3, 4)
