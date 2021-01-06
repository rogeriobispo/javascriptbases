var controller = { 
  data: "This is controller data",
  init: function () { 
    let domElem = document.getElementById('content-main')

    domElem.addEventListener("click", function (e) { // this refers do the element of id content-main
      console.log(this.data);
    })

    domElem.addEventListener("click", (e) => { // this refers do the obj controller
      console.log(this.data); 
    })
  }
}

// you can use that = this or bind

controller.init();
