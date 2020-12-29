// another way to work with querySelectorAll
// convert the nodelist into an array
// use the array methods to iterate trhough the items
// forEach -> iterate over all the nodes
// map -> permit create a new array based on the nodes existents
// filter -> para filtrar os nodes
let li = document.querySelectAll('li');
console.log(li.length);

let li_array = Array.prototype.slice.call(li)

li_array.pop();

li_array.forEach((node) => {
  node.classList.add('redtext');
})
