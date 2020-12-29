// using pseudoclass with querySelectorAll

let li = document.querySelectorAll('li:nth-child(odd)');

let li_array = Array.from(li);

li_array.forEach(function(elem) { elem.addEventListener('click', function(){ 
    console.log(this.textContent);
  }) 
})
