//  call back is a function that is invoked or call after something happens
// HighOrder function a function canbe stored passed return as a primitive value.
let logCall = function() {
  console.log("locCall called back.");
}
setTimeout(logCall, 3000)

setTimeout(function() {
  console.log("The function was called back.");
},3000)


let btn = document.querySelector('#item1');

btn.addEventListener('click', function(e){
  console.log('The button was clicked'); // it's an callback;
})


// my on callbacked function

let students = [
  { name: 'Mary', score: 90, school: 'East' },
  { name: 'James', score: 100, school: 'East' },
  { name: 'Steve', score: 40, school: 'East' },
  { name: 'Gabe', score: 90, school: 'West' },
  { name: 'Rachel', score: 85, school: 'East' },
  { name: 'Rochelle', score: 95, school: 'West' },
  { name: 'Lynette', score: 75, school: 'East' }
];

let processStudent = function(data, callback) {
  for (let i = 0; i < data.length; i++) {
    if(data[i].school.toLowerCase() === 'east') {
      if(typeof callback === 'function') {
        callback(data[i]);
      }
    }
  }
}


processStudent(students, function(obj) {
  if(obj.score > 60){
    console.log(`${obj.name} passed`)
  }
})

let determineTotal = function() {
  let total = 0,
      count = 0

  processStudent(students, function(obj) {
    total = total + obj.score
    count ++
  })

  console.log(`Total score: ${total} - Total count: ${count}`)
}

determineTotal()
