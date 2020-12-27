// The comma Operator
// is the last to be  evaluated
// some times is used as separations. 
// const a,
//       b,
//       c;

const x = [1, 2, 3, 4, 5, 6];

let obj = {
  name: 'Rogerio',
  country: 'BR',
  active: true,
  score: 90
}

// the comma operator evaluetes each of its operands (from lefet to right)
// and returns the value of the last operand.
let i = (8, 10); // will set ten.
console.log(i)

let j = (1+2, 3+4);
console.log(j)

// let x = 1; x=(x++, x); // the comma operator will evaluate both side x++ and set x.

i = (4, 5, 6, 7)
console.log(i)

for (let i = 0, j = 2; i < 20; i++, j++) { //coma operator is used on i and j increment
  console.log(i + j);
}

// for(
//   var i =2, r=[0, 1];
//   i< 15;
//   r.push(Number([r-1]) + Number(r[i-2])), i++ //here is comma operator
// )

// console.log(r)


let cnt = 0;
while(cnt++, cnt < 100) { // comma operator
  console.log(cnt);
}

let passOrFail = function(obj, score) {
  obj.score >= score ? (obj.pass = true, obj.completed = true) : (obj.pass = false, obj.completed = false);
}
// comma operator used to set more than one on a ternary

passOrFail(obj, 80)
console.log(obj)
