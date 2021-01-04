'use strict'

var keyCapture = function () {
  // there are 3 key events possible
  // kedown when the key is pressed
  // keyup when the key is released
  // key press when the key is pressed position
  let keySeries = [];
  const validKeys = /^[abcdefghijlmnopqrstuvwxyzç01234567890]$/;
  document.addEventListener('keydown', function (e) {
    let key = e.key;
    if( key === 'Enter') {
      console.log(keySeries.to_string());
      keySeries = []
    } else if(validKeys.test(key.toLocaleLowerCase())) {
      keySeries.push(key);
    }
  })
};

// DOMContentLoaded this will ocurr when the content dom is all loaded
document.addEventListener('DOMContentLoaded', function(e) {
  keyCapture();
})
