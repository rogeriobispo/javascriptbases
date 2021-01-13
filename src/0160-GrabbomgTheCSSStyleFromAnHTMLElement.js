//ComputedStyle is the current css aplyed to the element.

const elm = document.getElementById('elm');
const style = window.getComputedStyle(elm)

console.log(style.fontSize) // will show the value of font-size
console.log(style['font-size']) // will show the value of font-size

//this function returns the value of the css
const getCSSStyle = (elem, prop) => window.getComputedStyle(elem)[prop]
// in order to change value you can use.
elm.style.fontSize = '36px';
