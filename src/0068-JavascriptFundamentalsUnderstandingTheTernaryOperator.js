// ternary operator substitute the if statement on one line.

const student1 = {
  name: 'Mary',
  score: 90
}

const student2 = {
  name: 'Jame',
  score: 70
}


let passOrFail = function(obj, min){
  // (obj.score >= min) ? obj.pass = true : obj.pass = false
  obj.pass = obj.score >= min ? 'passou' : 'reprovou'
  //obj.pass = obj.score >= min // this the best solution
} 


passOrFail(student1, 70)

console.log(student1)
