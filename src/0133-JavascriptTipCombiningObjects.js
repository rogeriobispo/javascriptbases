const person = {
  firstName: 'John',
  lastName: 'Doe',
  address: '500 Main',
};

const scores = {
  course1: 80,
  course2: 75,
  course3: null,
  course4: null,
  course5: null,
};

const attempts = {
  tries: 6,
  member: true,
};

const finalObj = {
  ...person,
  ...scores,
  ...attempts,
};

console.log(finalObj);
