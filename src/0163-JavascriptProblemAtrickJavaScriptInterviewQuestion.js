// clousure and scope
const arr = [5, 10, 15, 20, 25]

for(var i = 0; i < arr.length; i++) { // is on the global scope 
  // let wil create block scope and will not be necessary IEF
  (function(){
    var j = i; // j becames a clojure
    setTimeout(function(){
      console.log(`Index: ${j}, element: ${arr[j]}`);
    }, 2000)
  })()
}

console.log(i)
