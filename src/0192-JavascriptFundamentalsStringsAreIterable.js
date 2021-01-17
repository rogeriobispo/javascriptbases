const str = 'This is a simple string';


for(let char of str){
  console.log(char)
}

const arrStr = [...str]

console.log(arrStr)

let iterator = str[Symbol.iterator]

console.log(iterator)
