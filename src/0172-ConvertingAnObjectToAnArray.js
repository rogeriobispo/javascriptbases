let scores = {
  "quiz_1": 90,
  "quiz_2": 0,
  "quiz_3": 70,
  "quiz_4": 40,
  "quiz_5": 100,
  "quiz_6": 20,
  "quiz_7": 80,
  "quiz_8": 90,
}
let arr = Object.entries(scores)


let scores2 = {
  "student": {
    "firstName": "Steven",
    "lastName": "Hancock"
  },
  "attempts": ['1/15/2020', '2/28/2020', '3/2/2020'],
  "quiz_1": 90,
  "quiz_2": 0,
  "quiz_3": 70,
  "quiz_4": 40,
  "quiz_5": 100,
  "quiz_6": 20,
  "quiz_7": 80,
  "quiz_8": 90,
}
let arr2 = Object.entries(scores2)
console.log(arr2)
// console.log(Object.fromEntries(arr2))

// console.log(Object.fromEntries([['a', 1], ['b', 2], ['c', 3]]))
