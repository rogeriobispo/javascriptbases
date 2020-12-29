// CallbackHell
// dificult to reason about to understand
// inversion of control

// CallbackHell sample
  const callBackHell = function (e) {
    let a = 0,
      b = 10;

    setTimeout(function () {
      a++;
      setTimeout(function () {
        a++;
        console.log('1 attempt: ' + a);
      }, 0);
    }, 0);

    setTimeout(function () {
      console.log('2 attempt: ' + a);
    }, 0);
    a = b;
  }

  callBackHell()
// this sample above is dificult to reason about to read it
// I'm not able to define what would be te result;
