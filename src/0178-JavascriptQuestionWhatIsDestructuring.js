let arr = [100, 50, 60];
let [first, second, third] = arr;
// console.log(first, second, third);

const getScores = () => [100, 85, 90, 65, 40];

let [a, b, , c] = getScores();
// console.log(a, b, c);

let quiz1 = [],
  quiz2 = [],
  quiz3 = [];

const separateScores = function ([s1, s2, s3]) {
  quiz1.push(s1);
  quiz2.push(s2);
  quiz3.push(s3);
};

separateScores([100, 85, 65]);
separateScores([90, 85, 75]);

// console.log(quiz1);
// console.log(quiz2);
// console.log(quiz3);

// destructuring with objects

let obj = {
  name: 'Rogerio',
  intersts: ['reading', 'running', 'javascript'],
  email: 'rogerio@gmail.com',
};

// let { name, intersts: inters, email } = obj;
// console.log(name);
// console.log(inters);
// console.log(email);


let stu1 = {
  name: 'John',
  student: true,
  score1: 100,
  score2: 90,
  score3: 60,
  score4: 85,
}

let stu2 = {
  name: 'John',
  student: true,
  score1: 100,
  score2: 90,
  score3: 60,
  score4: 85,
}



const sumFirstThreeScores = function({score1, score2, score3}) {
  return score1 + score2 + score3
}

console.log(sumFirstThreeScores(stu1))
