let str =
  'Natural language has no dominant paradigm, and neither does JavaScript. Developors can select from a grab bag of approaches--procedural, functional, object oriented-and blend them as appropriete.';

let regex = /(?:\w+)[,.\s](JavaScript)[,.\s]+(?:\w+)/;

let ans = regex.exec(str)
console.log(ans)
