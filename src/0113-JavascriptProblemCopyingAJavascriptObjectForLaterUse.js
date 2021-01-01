let startObj = {
  courseName: 'Test Course',
  startScreen: 1,
  questionAns: 0,
  score: 0,
  possScore: 100,
  pagesVisited: [1],
  completed: false,
  questionResults: {
    q1: {
      attempt: false,
      result: 'incorrect',
      score: 0
    },
    q2: {
      attempt: false,
      result: 'incorrect',
      score: 0
    }
  }
};

let origObj = startObj // any change on both obj will afact both they point to the same
// memory spot.
let origObj2 = Object.assign({}, startObj); // this copy the obj without point to the same memory spot.
// child object will be copy by references its a shallowcopy

let copyObj  = JSON.parse(JSON.stringify(startObj)) // this copy the obj without point to the same memory spot.
