let arr = [1, 2, 3, 4];

let it = arr[Symbol.iterator]();

console.log(it);
console.log(it.next()); //next iterates over the iterator
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); // when all elements has been listed by next done will be true

let nome = 'Rogerio';
let  nm = nome[Symbol.iterator]();

console.log(nm)
console.log(nm.next());
console.log(nm.next());
console.log(nm.next());
console.log(nm.next());
console.log(nm.next());
console.log(nm.next());
console.log(nm.next());
