// chaining is the fact to call a method with a return of a method.
const str = "Heare is a string"

console.log(str.replace('Heare', 'Here').toUpperCase().trim())

const arr = [1, 2, 3, 4, 5]

console.log(arr.filter(val => val > 2).join(', '))


let obj = {
  fName: 'Rogerio',
  lName: 'Bispo',
  score: [],
  addScore: function(val) {
    this.score.push(val)
    return this
  },
  doTotal: function() {
    this.total += this.score.reduce((x, y) => Number(x) + Number(y))
    return this
  },
  doAverage: function() {
    this.average += Number(this.total) / Number(this.score.length)
    return this
  }
}

obj.addScore(100).addScore(80).addScore(95).doTotal().doAverage()

console.log(obj)
