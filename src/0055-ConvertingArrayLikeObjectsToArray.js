let li = document.querySelectorAll('li');
console.log(li.length);

// li.pop(); it not an array so pop does not exists

let li_array = Array.prototype.slice.call(li); //old way to transform an array.
let li_arrray_from = Array.from(li)

li_array.pop(); // it is an array.

li_array.forEach(function(elem){
  elem.classList.add('redtext');
})


console.log(Array.from({length: 5}))

const arr1 = new Array(5)
console.log(arr1) //[ <5 empty items> ]
