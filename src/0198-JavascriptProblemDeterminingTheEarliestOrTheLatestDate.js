// const date = new Date()
// console.log(date.toString()) // Sun Jan 17 2021 12:25:48 GMT-0300 (Brasilia Standard Time)
// console.log(date.valueOf()) // 1610897148900 return the milliseconds since January 1 1970


const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
]


console.log(new Date(Math.max.apply(null, array)))
console.log(new Date(Math.min(...array)))
