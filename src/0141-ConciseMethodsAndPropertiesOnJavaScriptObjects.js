// concise Methods and properties on objects

let firstName = 'Rogerio'
let obj = {
  firstName, //concise property
  lastName: 'Santos',
  fullName() { //concise method old way is fullName: function() {}
    return this.firstName + ' ' + this.lastName
  }
};

console.log(obj.fullName())
