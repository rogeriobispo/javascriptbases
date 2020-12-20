let score = [100, 20, 35, 0, 95, 85, 75, 60];

let determinePass = function(array, threshold) {
  return array.map(elem => elem > threshold ? 'Pass' : 'Fail');
}

let result = determinePass(score, 80)
console.log(result)


// I don't wanna pass all the time 80 to the function
let score = [100, 20, 35, 0, 95, 85, 75, 60];

let determinePass = function(threshold) {
  return function(array) {
    return array.map(elem => elem > threshold ? 'Pass' : 'Fail');
  }
}

let pass80 = determinePass(80);

let result = pass80(score);
console.log(result)
