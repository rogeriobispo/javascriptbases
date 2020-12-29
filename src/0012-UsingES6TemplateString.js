// old concatenation style
var name = 'Tyson';

console.log('Hi there '+ name + '!!!')

// template string
console.log(`Hi there ${name}!!!`)

// template string
// is identified by use of the backtick
// inside the backticks `` you can include expressions with ${}
// 


var daySpan = function(date) {
  var startDate = new Date(date),
      curDate = new Date(),
      div = 1000 * 60 * 60 * 24;
      return (Math.floor((curDate - startDate) / div));
}

var stmt = `A total of ${daySpan('January 1, 2020')} days have passed since the start of this year`

console.log(stmt);


var firstName = 'Rogerio',
    lastName = 'Santos',
    street = '50 North Main',
    city = 'Salt Lake city',
    state = 'UT',
    zip = '00012';

var address = `
  The address is as follows
  ${firstName} ${lastName} 
  ${street} 
  ${city} 
  ${state}
`
console.log(address);
