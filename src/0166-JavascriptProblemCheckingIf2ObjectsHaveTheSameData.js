const obj1 = { name: 'rogerio', age: 37, eyes: 'red' };
const obj2 = { name: 'rogerio', age: 37, eyes: 'red' };
const obj3 = obj1;
console.log(obj1 === obj2); // they point to the diferentes memory space so false
console.log(obj3 === obj1); // thye point to the same memory space so true

const hasSameDataObj = function (obj1, obj2) {
  let obj1keys = Object.keys(obj1);
  let obj2keys = Object.keys(obj2);

  if (obj1keys.length === obj2keys.length) {
    return obj1keys.every(
      key => obj2.hasOwnProperty(key) && obj2[key] === obj1[key],
    );
  }

  return false;
};

console.log(hasSameDataObj(obj1, obj2));
