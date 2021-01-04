'use strict'
let str = "Don't try to run before you can walk."
const testStr = function(str) {
  console.log(str.indexOf('walk', 0)) //if its does found the number return a negative number
  console.log(str.search(/walk\./)) // the diference is the search requires a regex, 
  console.log(str.match(/walk\./)) //match return an array the first position is the word
  // if match does not found returns null
  console.log(/walk/.test(str)) // will return true if found false if it does not found
  console.log(str.includes('walk')) // will return true if found false if it does not found
}


testStr(str)
