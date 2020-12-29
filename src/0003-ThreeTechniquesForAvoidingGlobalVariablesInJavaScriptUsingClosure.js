// tree techniques to avoid global variables
// Use closure to avoid globals - place the code in a function
// use an immedately invoked function expressions(IIFE)
// Use a single global object

// first sample add all on a function but this function is still
// on a global environment

// function init() {

//   var content = document.getElementById('reporter'),
//       listeners = [],
//       listenersEnabled = false,
//       printIt = true,
//       lastEvent;
  
  
//   var loadInfo = function(message, eventObj) {
//     let log = `${message} --event type: ${eventObj.type} -- target object: ${eventObj.target.nodeName}<br>`;
//     content.insertAdjacentHTML('afterbegin', log)
//   }
  
//   var addListeners = function() {
//     var keyDownHandler = function(e) {
//       const log = `A key was pressed: ${e.keyCode} -- ${e.key}`
//       loadInfo(log, e)
//       if(e.keyCode === 17 && e.ctrlKey) toggleEventListeners()
//     }
//     document.addEventListener('keydown', keyDownHandler);
  
//     listeners.push(keyDownHandler, 'keydown');
  
//     var mouseMoveHandler = function(e) {
//       lastevent = e;
//       if(printIt) {
//         printIt = false;
//         loadInfo(`Mouse move recorded at coordinates: ${e.pageX}, ${e.pageY}`, e);
//         setTimeout(function(){
//           printIt = true;
//         }, 500)
//       } 
//     }
//     document.addEventListener('mousemove', mouseMoveHandler);
//     listeners.push(mouseMoveHandler, 'mousemove');
  
//     listenersEnabled = true;
//   }
  
//   var removeListeners = function() {
//     while(listeners.length > 0) {
//       document.removeEventListener(listeners.pop(), listeners.pop())
//     }
//   }
  
//   var toggleEventListeners = function() {
//     if(listenersEnabled){
//       removeListeners();
//       console.log('Event listeners removed');
//     } else {
//       addListeners();
//       console.log('Listeners Added');
//     }
//   }
  
  
//   toggleEventListeners()
// }

// window.addEventListener('load', init)


// this sample is on a Immediately invoked function
// 
const MYAPP = (function() {

  var content = document.getElementById('reporter'),
      listeners = [],
      listenersEnabled = false,
      printIt = true,
      lastEvent;
  
  
  var loadInfo = function(message, eventObj) {
    let log = `${message} --event type: ${eventObj.type} -- target object: ${eventObj.target.nodeName}<br>`;
    content.insertAdjacentHTML('afterbegin', log)
  }
  
  var addListeners = function() {
    var keyDownHandler = function(e) {
      const log = `A key was pressed: ${e.keyCode} -- ${e.key}`
      loadInfo(log, e)
      if(e.keyCode === 17 && e.ctrlKey) toggleEventListeners()
    }
    document.addEventListener('keydown', keyDownHandler);
  
    listeners.push(keyDownHandler, 'keydown');
  
    var mouseMoveHandler = function(e) {
      lastevent = e;
      if(printIt) {
        printIt = false;
        loadInfo(`Mouse move recorded at coordinates: ${e.pageX}, ${e.pageY}`, e);
        setTimeout(function(){
          printIt = true;
        }, 500)
      } 
    }
    document.addEventListener('mousemove', mouseMoveHandler);
    listeners.push(mouseMoveHandler, 'mousemove');
  
    listenersEnabled = true;
  }
  
  var removeListeners = function() {
    while(listeners.length > 0) {
      document.removeEventListener(listeners.pop(), listeners.pop())
    }
  }
  
  var toggleEventListeners = function() {
    if(listenersEnabled){
      removeListeners();
      console.log('Event listeners removed');
    } else {
      addListeners();
      console.log('Listeners Added');
    }
  }
  
  return { toggleEventListeners: toggleEventListeners } 
  
})()

MYAPP.toggleEventListeners()
