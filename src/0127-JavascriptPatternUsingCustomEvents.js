//customs events

// creating custom event
// var loginEvent = new CustomEvent('login', {
//   detail: {
//     firstTime: true,
//   },
// });

// //using the custom event
// document.addEventListener('login', function (e) {
//   console.log('user has logged in');
//   console.log(e)
// });

// document.dispatchEvent(loginEvent); // this will make the event fire you can dispach any dom element

const courseCompleted = function(user, score, latency) {
  let courseCompletion = new CustomEvent('completeCourse', {
    detail: {
      user: user,
      score: score,
      time: latency
    },
    bubles: true,
    cancelable: false
  })

  document.dispatchEvent(courseCompletion);
}
