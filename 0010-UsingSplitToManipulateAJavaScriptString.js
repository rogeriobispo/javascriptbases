// split converte string to array

// String.split(delimenter, limit);
// returns an array of strings
// Delimeter is the caracter on which the string splits
// the delimenter can also be a regular expression
// Limit: specifies the maximum length of the array

const url = 'http://www.allthingsjavascript.com?user=steven&id=5312'
// window.location.href = retorns the url
console.log(url.split('?')[1].split('&'))

var str = 'The cow jumped over the moon'

console.log(str.split(' ').join('-'))
