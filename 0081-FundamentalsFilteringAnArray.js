// use the filter method
let scores = [100, 20, 35, 0, 95, 85, 75, 60, 98, 37];


let passScores = scores.filter(function(score) {
  return score > 80
})
console.log(passScores)
// bellow is the same. But
console.log(scores.filter(val => val > 80))
