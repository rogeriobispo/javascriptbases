let nums = [1 , 5, 6, 10, 11, 12, 13, 14];


let reduced = nums.reduce((acc, num) =>{ 
  return acc + num 
}, 0) //the sum of all number of array the accumulator star on 1000
console.log(reduced)

let avg  = nums.reduce((acc, num) => acc + num ) / nums.length

console.log(avg)


let avg2 =  nums.reduce((acc, num, index, arr) => {
  return acc + (num / arr.length)
}, 0)

console.log(avg2)

let higNumber = nums.reduce((acc,val) => {
  if(val > acc){
    return val
  } else {
    return acc;
  }
})

console.log(higNumber)
