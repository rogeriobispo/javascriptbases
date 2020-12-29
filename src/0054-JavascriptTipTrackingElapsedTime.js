let startDate = new Date();
setTimeout(function() {
  let endDate = new Date();
  console.log(endDate - startDate) //you will receive the time in milliseconds that is de diference of the dates
}, 10000)
console.log('finished')
