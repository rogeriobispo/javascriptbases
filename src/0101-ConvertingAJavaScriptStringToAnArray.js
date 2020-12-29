let palindrome = 'Never odd or even.';

let reverseStr = function(str) {
  return [...str]
  // Array.from(palindrome) is the same solution
}

console.log(reverseStr(palindrome).reverse().join(''))
