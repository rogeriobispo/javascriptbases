// ways to manipulating css on javascript
// every dom element has a style attribute
// modifying CSS Classes (classlist)
// working with stylessheet (document.styleSheet)

let b1 = document.createElementById('b1');
b1.style.color = 'red' // will change css atribute color of b1;
b1.style.fontSize = '16px' // will change css attributes font-size 
b1.style.marginLeft = '10px' // will change css attributes margin-left
// b1.classList // has the methods add removes contains toggle
b1.classList.add('bluetext');
b1.classList.remove('bluetext');
b1.classList.toggle('bluetext'); // returns true when is applyend the css false when is removed
b1.classList.contains('blutext')
// document.styleSheets // list all the styleshee of a page.

document.styleSheets[0].disable = true // disable the css selected
