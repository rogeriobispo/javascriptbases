// Higher Order Function.
// Higher order functions are functions that operate on other functions
// by either taking arguments or returning them. the fact that javascript supports
// first-class functions makes it possible to create higher order functions
// call back is a higher order function

const x = [1, 5,2, 6, 9, 3, 7].sort()

console.log(x)


const things = ['house', 'automobile', 'car', 'bicycle', 'Tree', 'Building']

things.sort((a, b) => {
  let x = a.toLocaleLowerCase();
      y = b.toLocaleLowerCase();
  if(x < y) return -1;
  if(y < x) return 1;
  return 0;

})

console.log(things)
