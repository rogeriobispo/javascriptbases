let fun = function(val) {
  if(!val) {
    val = 10;
  }
  console.log(val);
}



let fun1 = function(val) {
  val  = val || 10 // if val is empty will set 10
  console.log(val)
}

let fun2 = function(val = 10) {
  console.log(val)
}
fun()
fun1()
fun2()
fun(100)
fun1(100)
fun2(100)



let test = function(num) {
  if(num > 0 && num >= 5 && num <= 10) {
    return true;
  } else {
    return false;
  }
}

let test1 = function(num) {
  return num > 0 && num >= 5 && num <= 10
}

console.log(test(6))
console.log(test1(6))
console.log(test(11))
console.log(test1(11))
console.log(test(2))
console.log(test1(2))
