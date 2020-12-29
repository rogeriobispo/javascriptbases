//ForEach()
// map()
// filter()
// every() and some()
// reduce(), reduceRight(),


for (let i = 0; i < arr.length; i++) { //comum wai of interates array
  console.log(arr[i] * arr[i]);
}

var arr = [1, 2, 3, 4, 5];

arr.forEach((elm, theIndex, theArr) => { //for each cann receive index of the element and the whole array
  theArr[theIndex] = elm * elm;
})

console.log(arr)

var arr = [1, 2, 3, 4, 5];

var newArray = arr.map((val) => val * val )
console.log(newArray)

var arr = [0, 100, 95, 45, 65, 80, 75, 90];
// filter receives an predicative function.
// wich returns true or false

var filtered = arr.filter((val) => val > 80)
console.log(filtered)


var arr = [0, 100, 95, 45, 65, 80, 75, 90];
// every to return true needs that all elements of array 
// meet de criteria.
// some needs only one meets de criteria
console.log(arr.every(val => val > 80))
if(arr.every(val => val > 80)) {
  console.log('todos foram acima de 80')
} else {
  console.log('nem todos foram acima de 80')
}

console.log(arr.some(val => val > 80))
if(arr.some(val => val > 80)) {
  console.log('algum(s)  foi(ram) acima de 80')
} else {
  console.log('nem todos foram acima de 80')
}

var corrArr = "The correct answer".split(' ');
var ansArr = 'These correct answer'.split(' ');

var results = corrArr.every((word, index) => {
  return word.toUpperCase() === ansArr[index].toUpperCase();
})

if(results)
  console.log('It is correct');
else
  console.log('Sorry that was wrong');

// reduce && reduceRight
var arr = [0, 100, 95, 45, 65, 80, 75, 90, 10000];
var sum = arr.reduce((accumulator, val) => accumulator + val)
console.log(sum);

var max = arr.reduce((high, val) => {
  return (high > val) ? high : val;
})
console.log(max)
