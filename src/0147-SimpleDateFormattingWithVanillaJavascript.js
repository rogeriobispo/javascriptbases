let date = new Date();
console.log(date.toDateString()); // Tue Jan 05 2021 toDateString you cant change the way is is shown
console.log(date.toLocaleDateString()); // 1/5/2021
console.log(date.toLocaleString()) //1/5/2021, 5:22:54 PM
console.log(date.toLocaleString('en-US',{
  year: '2-digit', //numerc or 2-digit
  month: 'long', // numeric, 2-digit, long, short, narrow
  day: 'numeric', //numeric, 2-digit
  weekday: 'long', // long, short, narrow
  hour: 'numeric', //numeric, 2-digit
  minute: 'numeric', //numeric, 2-digit
  second: 'numeric',//numeric, 2-digit 
  timeZoneName: 'long' // long, short
} )); // Tuesday, January 5, 21, 5:32:55 PM Brasilia Standard Time
