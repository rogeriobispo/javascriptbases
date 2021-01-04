let learner1 = {
  firstName: 'John',
  lastName: 'Doe',
  scores: {
    s1q1: '5:8',
    s1q2: '9:10',
    s1q3: null,
    s1q4: '1:5',
    s1q5: '12:15',
    s2q1: '6:8',
    s2q2: null,
    s2q3: '4:20',
    s2q4: null,
    s3q1: null,
    s3q2: '6:10',
    s3q3: '7:7',
  },
};

const pullScores = function (obj, section = 0) {
  let scores = {};

  if (section === 0) {
    scores = Object.assign({}, obj.scores);
  } else {
    for (let key in obj.scores) {
      if (key.includes('s' + section)) {
        scores[key] = obj.scores[key];
      }
    }
  }
  return scores;
};

let newObj = pullScores(learner1, 0);
console.log(newObj);
