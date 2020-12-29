// forInLoop;
// use ther for in loop to iterate over non-array objects
// Even though you can use a for in loop on arrays,
// it is recommended to use a normal for loop

// the properties displayed may include properties from the
// property chain

// the for loop will only display enumerable properties
// the enumarble attributes of a property must be set to true
//  you cannot rely on the order the properties are displayed

var proto1 = {
  normingGreet: "Good Morning",
  greet: function() {
    console.log(this.greeting)
  }
};

Object.setPrototypeOf(proto1, { eveningGreet: 'Good Evening' })

var obj1 = Object.create(proto1);

obj1.greeting = "Hello";
obj1.daytime = "morning";
obj1.type = "greeting";
obj1.setGreet = function() {
  if(this.daytime.toLowerCase() === "morning") {
    this.greeting = this.normingGreet;
  } else if(this.daytime.toLowerCase() === "evening") {
    this.greeting = this.eveningGreet;
  }
}

for (const i in obj1) {
  if(obj1.hasOwnProperty(i) && typeof obj1[i] !== "function") {
    console.log(i + " -- "+ obj1[i])
  }
}

var obj2 = { a: 'a' }

for (const i in obj2) {
  console.log(i + " -- "+ obj2[i])
}
