// lazy loading.
// the js is load based on event that loads the js file.

document.addEventListener('DOMContentLoaded', function(event) {
  let head = document.querySelector('head');

  let loadJS = function(src) {
    let jsLink = document.createElement("script");
    jsLink.src = src;
    head.appendChild(jsLink);
  }

  console.log('First JavaScript File loaded')
  loadJS('appNext.js');
  loadJS('appNext2.js');
})
