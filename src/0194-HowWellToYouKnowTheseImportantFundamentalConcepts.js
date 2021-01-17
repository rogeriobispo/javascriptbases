// Asynchronous code with setTimeout
// settimeout does not block the code

const showNumbers = function () {
  console.log(1);
  setTimeout(function () {
    console.log('2');
  }, 1000);
  setTimeout(function () {
    console.log('3');
  }, 0); // this one onte wait execut until the last commando of the function
  console.log('4');
};

showNumbers() //1432 


//Understand scope
const aboutMonths = function () {
  let j1 = 'January',
      j2 = 'June',
      j3 = 'July';


      function jMonths() {
        let shortMonth = 'May';
        console.log(`${j1}, ${j2}, ${j3} are months that start with J.`);
      }

      console.log(`${shortMonth} only has three letters.`); // shortMonth is not available at this scope

      jMonths();
}

aboutMonths();


// Establishing Javascript's Exectuion contexts
favoriteSeason(); //estou chamando a funcão antes de declarar season por isso não existe.
var season = 'Spring';
// function favoriteSeason(){ //function declaration is hoisted
//   console.log(`My favorite season is ${season}`)
// }

const favoriteSeason = function(){ //function expression is not. hoisted so ocurrs an error
  console.log(`My favorite season is ${season}`)
}



console.log({} === {}) // false 
console.log({} == {}) // false 

console.log('june, july'== ' june, july') //false
console.log('june, july'=== 'june, july') //true

console.log(2020 == "2020") // true
console.log(2020 === "2020") // true 

console.log((1000 - 100) === 900) //true
