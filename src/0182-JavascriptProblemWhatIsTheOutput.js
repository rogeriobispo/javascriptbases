let arr = [2, 4, 5, 2, 4, 5, 5, 6, 3];
let arr_set = [...new Set(arr)]; 

let foo = arr_set.reduce((a, b) => a + b, 0);
25

console.log(foo + arr_set.length)
