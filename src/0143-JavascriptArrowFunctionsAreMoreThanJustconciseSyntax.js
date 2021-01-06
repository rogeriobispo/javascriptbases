// Arrow Function and lexical this binding.

let protoObj = {
  // fullName() {
  //   return this.firstName + ' ' + this.lastName;
  // },

  fullName: () => { //arrow function is good for callbacks 
    console.log(this);
    return this.firstName + ' ' + this.lastName
  }
};

let obj = {
  firstName: 'John',
  lastName: 'Doe',
};

let obj1 = {
  firstName: 'Rogerio',
  lastName: 'Santos'
}
Object.setPrototypeOf(obj, protoObj);
Object.setPrototypeOf(obj1, protoObj);


console.log(obj.fullName())
console.log(obj1.fullName())
