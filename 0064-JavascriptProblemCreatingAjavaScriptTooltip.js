let setUpTootip = function() {
  let tooltip = "",
      toolTipDiv = document.querySelector('.div-tooltip'),
      tooltipElements = document.querySelectorAll('.hover-reveal');
  const li_array = Array.from(tooltipElements)
  let timer;
  const displayTootip = function(e) {
    tooltip = this.dataset.tooltip;
    toolTipDiv.innerHTML= tooltip;
    toolTipDiv.style.top = e.pageY + 'px';
    toolTipDiv.style.left = e.pageX + 'px';
    // toolTipDiv.style.opacity = 1;
    fadeIn(toolTipDiv)

  }

  let fadeOut = function(element) {
    let op = 1;
    if(!timer) {
      timer = setInterval(function(){
        if(op <= 0.1 ) {
          clearInterval(timer);
          timer = null;
          element.style.opacity = 0;
          element.style.display = 'none'
        }
        element.style.opacity = op;
        op -= op * 0.1;
      }, 10);
    }

  }

  let fadeIn = function(element) {
    var op = 0.1;
    element.style.display = 'block'
    var timer = setInterval(function(){
      if(op >= 1) {
        clearInterval(timer)
      }

      element.style.opacity = op;
      op += op * 0.1;
    }, 10);
  }
  let bindEvents = function(elem) {
    let timeout;
    elem.addEventListener('mouseenter', function(e) {
      
      timeout = setTimeout(function(){
        displayTootip.call(elem, e)
      }, 400)
    })

    elem.addEventListener('mouseleave', function(e) {
      // toolTipDiv.style.opacity = 0;
      clearTimeout(timeout)
      fadeOut(toolTipDiv)
    })
  }
  
  li_array.forEach(bindEvents)
};


setUpTootip();


// Using call and apply
// Normaly the value of the keyword is set by how the function is invoked.
// call and apply invoke a function while allowing you to
// establish the valeu of this
// with call you pass arguments to the function as you normally would.
// with apply you pass arguments to the functionas an array.
