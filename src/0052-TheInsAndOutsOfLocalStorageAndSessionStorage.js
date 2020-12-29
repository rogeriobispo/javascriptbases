// what is it and when would you use it?
// localstorage and sessionStorage are used to store data in the browser
localstorage.setItem('userName', 'rogerio.bispo'); //inclui user name on localstorage
const uName = localstorage.getItem('userName'); // recuperada o valor do localstorage

// session storage is only availble in session
sessionStorage.setItem('userName', 'rogerio.bispo'); //inclui user name on localstorage
const uName = sessionStorage.getItem('userName'); // recuperada o valor do localstorage

// diferences lifetime the scope
// localstorage does not expire
// localStorage is scoped to the document origin
// if the protocol changes will loose access to localstorage
// if the domain change will loose access to localstorage
// if port change will loose access to localstorage

// sessionStorage is removed when the tab or window is closed
// sessionStorage is also escoped to the document's origin
// it is recommended when you work with sessionStorage and localstorage
// to use getItem and setItem

// localStorage.setItem() its necessary to by a string
// use JSON.stringify to convert object to string;

let start = new Date();
let obj = {
  userName: 'Rogério',
  date: start
};

localStorage.setItem('conectionInfo', JSON.stringify(obj))


// restouring information

let obj = JSON.parse(localStorage.getItem('conectionInfo'));
console.log(obj)

let len = new Date() - new Date(obj.date);
console.log(len)


localstorage.removeItem('conectionInfo');
localstorage.clear() // remove every thing atashed to local storage.
