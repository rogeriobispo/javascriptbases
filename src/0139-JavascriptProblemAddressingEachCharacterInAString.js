let str =
  'Natural language has no dominant paradigm, and neither does JavaScript. Developers can select from a grab bag of approaches--procedural, functional, object oriented-and blend them as appropriete.';



// let cnt = 0
// for(let l of str){
//   if(l.toLocaleLowerCase() === 'o')  cnt++;
// }

// console.log(cnt)

let cnt = [...str]

const result = cnt.reduce((acc, val) => (val.toLocaleLowerCase() === 'o') ? ++acc : acc, 0 )
console.log(result)
