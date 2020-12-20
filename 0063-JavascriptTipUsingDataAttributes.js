// Using data Attributes
// Allow the sorting of extra information on a standard html element
// a data attributes is an attribute the data- exemplo (data-name)
// Javascript provides a simple sintax for retrieving the data: element.dataset.name

<ul>
   <li data-show="true" data-text="novo texto"></li>
   <li data-show="false" data-text="novo texto"></li>
   <li data-show="true" data-text="novo texto"></li>
   <li data-show="false" data-text="novo texto"></li>
</ul>


const lis = document.querySelectorAll('li');
const lis_array = Arrayfrom(lis);
lis.forEach(elem => {
  elem.addEventListener('click', (e) => {
    if(elem.dataset.show === 'true'){
      elem.innerHTML = elem.dataset.text;
    }
  })
})
