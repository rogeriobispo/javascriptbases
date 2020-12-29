let mDate = new Date();
mDate.setTime(1010);
console.log(mDate.toString())
console.log(mDate.getMinutes())
console.log(mDate.getSeconds())
console.log(mDate.getMilliseconds())

mDate.setTime(60001)
console.log(mDate.toString())
console.log(mDate.getMinutes())
console.log(mDate.getSeconds())
console.log(mDate.getMilliseconds())
console.log(mDate.getHours())

let str = '2'

console.log(str.padStart(4, '0')) //0002
console.log(str.padStart(4 )) //   2


let str2 = '1111'

console.log(str2.padStart(4, '0')) //1111
console.log(str2.padStart(4 )) //1111



let formatTime = function(m) {
  //0000:00:00.00
  let hms = "",
      formatTime = new Date(),
      hours = "",
      minute = "",
      seconds = "0",
      dSecs = "0"

  formatTime.setTime(m);
  hours = Math.floor(m / 3600000).toString().padStart(4, '0')
  minute = formatTime.getMinutes().toString().padStart(2, '0')
  seconds = formatTime.getSeconds().toString().padStart(2, '0')
  dSecs = Math.round(formatTime.getMilliseconds() / 10).toString().padStart(2, '0')
  hms = `${hours}:${minute}:${seconds}.${dSecs}`
  return hms
}

console.log(formatTime(400567))
console.log(formatTime(5500651))
