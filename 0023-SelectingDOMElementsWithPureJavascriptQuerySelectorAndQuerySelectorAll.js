
// Using querySelector and querySelectorAll
// select dom elements using css selectors
// compatible with all new browsers
// availble on the document object and elements nodes
// Returns a static collection instead of a live collection
// querySelector returns the very first element
// querySelectorAll returns all occurrences

document.querySelector('li') // seleciona a primeira ocorrencia de li.
document.querySelectorAll('li') // seleciona todas ocorrencia de li.
document.querySelectorAll('.bullets') // seleciona todos elementos com a classe bullets
document.querySelectorAll('#bullets') // selecion o elemento com id bullets
document.querySelectorAll('div>h1') // seleciona o h1 que e filho imediato de div
document.querySelectorAll('.bullets #b1') // seleciona dentro de bullets seleciona o id b1
let node = document.querySelectorAll('ul li:nth-of-type(3)') // seleciona o 3 filho li de ul
node.querySelectorAll('h1') // its is possible to use querySelectorAll inside of node returned
