const person = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  type: {
    type1: "admin",
    type2: "user",
  },
  active: true,
  address: {
    street: {
      street1: 'Doutor nelson',
      street2: 'Apt. 5'
    },
    city: 'San Francisco',
    zip: 123
  }
}

const isObject = function (val) {
  if(val === null) return false;
  if(typeof val === 'object') return true;
}

const objProps = function (obj) {
  for(let value in obj) {
    if (isObject(obj[value])){
      objProps(obj[value])
    } else {
      console.log(value, obj[value])
    }
  }
}

objProps(person)
