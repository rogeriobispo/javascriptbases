'use strict'

const courseInfo = Object.freeze({
  questions: 10,
  possScore: 100,
  active: true,
  startPage: './page1.html',
});

console.log('IsFrozen: ', Object.isFrozen(courseInfo))
courseInfo.questions = 100; // this will fail only with use strict
courseInfo.endPage = './lastPage.html'; // this will fail only with use strict

delete courseInfo.possScore; // this deletion will fail because Object.freeze
