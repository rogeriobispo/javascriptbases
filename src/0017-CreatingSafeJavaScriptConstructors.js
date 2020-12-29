// issius with contructor.


function Users(fName, lName){
    this.firstName = fName; // when does not use new this refers to global object
    this.lastName = lName; // when use new refers to the new object
}


var user1 = Users('Rogério', 'Santos') // this is not hoisted


var user2 = new User('Heloisa', 'Santos') // this is hoisted

// to prevent creating object without new at the global scope
// user the operator instanceof


function People(fName, lName){
  if (this instanceof People) { // this prevent from creating an object without new
    this.firstName = fName; 
    this.lastName = lName; 
  } else {
    return new People(fName, lName)
  }
}
