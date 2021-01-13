const scores = [90, 30, 20, 75, 85, 95, 1, 55, 60, 40]

var total = scores.reduce((acc, elm) => acc + elm, 0)

var minMax = scores.reduce((acc, elm) => [Math.min(acc[0], elm), Math.max(acc[1], elm)], [100, 1])

const students = [
  {
    userid: 'stevenh',
    name: 'Steven',
    passFail: true
  },
  {
    userid: 'debbw',
    name: 'Debbie',
    passFail: true
  },
  {
    userid: 'maxv',
    name: 'Max',
    passFail: false
  }
]
const studentsObj = students.reduce(function(acc, elm){
  return {
    ...acc,
    [elm.userid]: elm,
    
  }
}, {})
console.log(studentsObj)
console.log(total)
console.log(minMax)
