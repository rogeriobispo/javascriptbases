// sparse arrays ->

let arry = [],
  arry2 = [1, , 2, 3, 4, , 5], //sparce array arrays that have nothing
  // null and endefind is a value
  val;
arry[0] = null;
arry[1] = 5;
arry[2] = val; // will print undefinde
arry[3] = 10;
arry[5] = 8;
// arry[4] will print undefined

// console.log(arry);
// console.log(arry2);

// for(let i = 0; i < arry.length; i++) {
//   // console.log(arry2[i]);
//   if(arry[i]){
//     console.log(arry[i])
//   }
// }

// for( let i in arry2){ // for in will not show empty items
//   console.log(arry2[i])
// }
// empty item wil print out as undefined;

console.log(arry.reduce((sum, val) => sum + val, 0)); // reducing arrays with nulls and undefineds.
// will return NaN.
let arryWithoutNullAndUndefined = arry.filter(val => {
  return val !== undefined && val !== null;
});

console.log('removed empty items');
let arryWithouEmptyItem = arry2.filter(val => true);
console.log(arry2);
console.log(arryWithouEmptyItem);

// console.log(arry2.reduce((sum, val) => sum + val, 0)); // it calculate ok with empty items
// removing undefined null and empty items at once.

arry.filter(val => val !== undefined && val !== null).filter(val => true);
