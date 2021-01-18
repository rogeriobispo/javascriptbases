const students = [
  {
    fName: 'Steven',
    lName: 'Smith',
    age: 23,
    score: 90,
  },
  {
    fName: 'Mary',
    lName: 'Smith',
    age: 28,
    score: 70,
  },
  {
    fName: 'James',
    lName: 'Smith',
    age: 19,
    score: 100,
  },
  {
    fName: 'Lynette',
    lName: 'Jorgensen',
    age: 21,
    score: 90,
  },
  {
    fName: 'Camille',
    lName: 'Jorgensen',
    age: 23,
    score: 80,
  },
];

const sortArrayObjs = function (arr, prop1, prop2) {
  let sort1 =  [...arr].sort((a, b) => {
    if(a[prop1] == b[prop2]){
      if(a[prop2] === b[prop2]) return 0;
      return (a[prop2] < b[prop2]) ? -1 : 1
    } else {
      return (a[prop1] < b[prop1]) ? -1 : 1
    }
  });
  return sort1
};

console.log(sortArrayObjs(students, 'lName', 'fName'))
console.log(sortArrayObjs(students, 'score', 'fName'))
