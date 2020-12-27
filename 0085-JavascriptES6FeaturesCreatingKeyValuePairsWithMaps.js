let coll = new Map();
const obj ={
  obj: '2'
}
coll.set('key', 100)
coll.set(obj, 200) // we can use aninthing as a key even an object and so on
coll.set(5, 330)

console.log(coll);
console.log("Obj value",coll.get(obj));
console.log("key: ",coll.get('key'));
console.log(coll.size) // return quantity of elements of a map
// coll.delete(obj)
console.log(coll);
// coll.clear();
console.log(coll);
console.log(coll.values())
console.log(coll.keys())

for(v of coll.values()) {
  console.log(v)
}
