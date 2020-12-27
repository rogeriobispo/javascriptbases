// working with key value pairs


let obj = {
  name: 'Rogerio',
  country: 'BR',
  active: true,
  score: 90
}

const keys = Object.keys(obj) //returns an array of keys.
const values = Object.values(obj) // returns an array of values
const entries = Object.entries(obj) // returns an array of [key, value] pairs

// console.log(keys)
// console.log(values)
// console.log(entries)


const students = {
  'steve@gmail.com': 90,
  'james@gmail.com': 75,
  'lynette@gmail.com': 65,
  'lilperch@gmail.com': 50,
  'tom53@gmail.com': 97,
  'christy@gmail.com': 97,
  'christy@gmail.com': 98
}


let scores = Object.values(students)
let sum = scores.reduce((acc, score) => acc + score)
let avg = sum / scores.length
let passing = scores.filter(score => score > 80)
console.log(sum)
console.log(avg)
console.log(passing)

const email = Object.keys(students)
console.log(email)

let allData = Object.entries(students)
console.log(allData)
let allpassingEmail = allData.filter(data => {
  if(data[1] > 80 ){
    return data
  }
})

console.log(allpassingEmail)
// let sum = 0;
// let cnt = 0;
// let avg = 0;
// for(let val in students) { 
//   sum+= students[val];
//   cnt++
// }
// // this is the hardest way to work with objects
// avg = sum/cnt;

// console.log(sum)
// console.log(avg)
