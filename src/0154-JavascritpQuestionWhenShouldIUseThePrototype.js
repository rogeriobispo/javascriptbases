// when Should I Use the prototype.

// Dry coding reuse code.
// Ability to manipulating a singl object for multiple instances
// Reduce memory requirements

let objProto = {
  fullName() {
    return this.firstName+ " " + this.lastName
  }
};

const user1 = Object.create(objProto)
user1.firstName = 'Steven';
user1.lastName = 'Hancock'
const user2 = Object.create(objProto)

console.log(user2.fullName());


// __________________________________________
// function constructor
const Users = function(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

Users.prototype = objProto;
Users.prototype.constructor = Users;

var user3 = new Users('Olivia', 'Jensen')
// __________________________________________

// ------------------------------------------
class User {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  
  fullName() {
    return this.firstName+ " " + this.lastName
  }
}

console.log(new User('Rogerio', 'Santos'))
