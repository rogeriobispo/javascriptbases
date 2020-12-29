// Promise.all aguarda todos os processo serem executados.
// Promise.race para a partir do momento que o primeiro executa.
// Promise.all([arrayofpromises])
let p1 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(['A', 'B']);
    }, 4000);
  });
};
let p2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject('falhou');
    }, 4000);
  });
};

const pAll1 = Promise.all([p1(), p1()]); // returns resolved
console.log(pAll1);
// promises all promise is resolved
Promise.all([p1(), p1()]).then(res => console.log(res)); //this pomisse all will sucessfully resolve
Promise.all([p1(), p2()])
.then(res => console.log(res))
.catch(err => console.log(err)); //this pomisse will reject becasue p2 failed

console.log('RACE')
// race
Promise.race([p1(), p2()])
.then(res => console.log(res))
.catch(err => console.log(err)); //this pomisse will sucessefuly resolve wil accept teh first that resolves


// will return a promise reject because p2 rejects
console.log('see this is asynch code');
