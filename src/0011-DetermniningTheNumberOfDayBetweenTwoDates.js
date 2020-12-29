// The Date is expressed as a number or string.
// The date object is composed by many methods
// the zero time is equals January 1, 1970 at 00:00:00
// date before january 1, 1970 at 00:00:00 is negative

var start = new Date('December 31, 2019'),
    end = new Date(),
    diff = 0,
    days = 1000 * 60 * 60 * 24

diff = end - start
console.log(Math.floor(diff / days))
