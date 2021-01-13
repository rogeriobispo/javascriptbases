'use strict'

let student1 = {
  firstName: 'John',
  lastName: 'Doe',
  student: true,
  quiz1: 90, 
  q2: 70,
  q3: '85',
  quiz4: 100,
  quiz5: 0
}

// for(let key in student1){
//   console.log(key)
//   console.log(student1[key])
// }


const keys = Object.keys(student1)

const values = Object.values(student1)

const entries = Object.entries(student1)


const getScores = function(obj) {
  return Object.values(student1).filter(value => !isNaN(value) && typeof value !== 'boolean')
  //return Object.values(student1).filter(value => typeof value !== 'number')
}

console.log(getScores(student1))
