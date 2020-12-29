// five concept to understand constructor javascript.
// the keyword new determines whether or not a function is a constructor
// it creates a new object which is bound to this
// the function is invoked with the value of this equal to the new object
// it sets the new object prototype to the prototype prototype of the constructor
// it return the object

function Users(fName, lName) {
  // console.log(this)
  this.firstName = fName
  this.lastName = lName

}

var user1 = Users("Heloisa", "Santos")

var user2 = new Users("Heloisa", "Santos")
console.log(user1)
console.log(user2)
