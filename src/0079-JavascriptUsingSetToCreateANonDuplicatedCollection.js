let col1 = new Set();
col1.add("apple");
col1.add("onrange");
col1.add("blueberry");
col1.add("orange"); // it wont be add because already exists.

console.log(col1);

let col2 = new Set([1, 2, 3, 4, 5, 2, 3, 6]); //set will remove dpulicated

console.log(col2);
console.log(col2.size);
col1.delete('apple');
console.log(col1);
console.log(col2.has(2)) // verify if the collection has number 2;
col2.forEach(value => console.log(value));
let arr = [...col2] // convert set on a array.

// set methods
// add /adiciona valor
// clear limpa todo o set.
// delete
// entries
// forEach
// has 
// keys
// size
// values
