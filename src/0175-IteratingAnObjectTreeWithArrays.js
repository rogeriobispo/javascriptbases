const person = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  type: {
    type1: "admin",
    type2: "user",
  },
  interests: ['skiing', 'reading', 'sports', 'javascript'],
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

const objProps = function (obj, originalProp) {
  for(let value in obj) {
    if (isObject(obj[value])){
      objProps(obj[value], value)
    } else {
      if(Array.isArray(obj)){
        console.log(originalProp + value, obj[value])
      } else {
        console.log(value, obj[value])
      }
    }
  }
}

objProps(person)


for(let value in [1,2,3,4,5]){
  console.log(value, [1, 2, 3, 4, 5][value]);
}
