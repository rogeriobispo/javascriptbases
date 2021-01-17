let scores = [0, 55, 85, 90, 100, 95]

// console.log(scores.find((value) => value > 55 ))


let users = [
  { name: 'Steven', score: 55 },
  { name: 'Mary', score: 95 },
  { name: 'Eliza', score: 65 },
  { name: 'Hans', score: 85 },
  { name: 'Jeremiah', score: 95 },
]

// console.log(users.find(({ name }) => name === 'Mary'))
console.log(users.find(({ name }, index, arr) => {
  console.log(name, index),
  console.log(arr[index])
  
}))
