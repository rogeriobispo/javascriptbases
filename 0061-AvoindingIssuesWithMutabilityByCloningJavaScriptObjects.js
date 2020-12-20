let theObj = {
  total: 65,
  increment: 1
};

const clonedObj = function(obj) {
  return JSON.parse(JSON.stringify(obj))
}
const incrementTotal = function(obj, val) {
  let newObj = clonedObj(obj)
  newObj.increment = val;

  return function(){
    console.log(newObj.total)
    newObj.total = newObj.total + newObj.increment;
    console.log(newObj.total)
  }
}


const incBy1 = incrementTotal(theObj, 1);
const incBy2 = incrementTotal(theObj, 2);

incBy1();
incBy2();

console.log(typeof 1.0)
