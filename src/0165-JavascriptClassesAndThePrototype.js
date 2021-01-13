class Person {
  constructor(name, age, greet = 'Hi') {
    this.name = name;
    this.age = age;
    this.greeting = greet;
    console.log('superContructor');
  }

  getGreeting() {
    return `${this.greeting} ${this.name}! welcome`;
  }
}

// let p1 = new Person('Rogerio', 37, 'Sup');
// let p2 = new Person('Rogerio', 37);
// console.log(p1.getGreeting());
// console.log(p2.getGreeting());

class Employee extends Person { //the prototype of this class is person class. 
  constructor(name, age, salary, greet = 'Hi'){
    super(name, age, greet)
    this.salary = salary
  }

  getGreeting() {
    return super.getGreeting() + " Don't forget to record your time.";
  }

  getSalary() {
    return this.salary;
  }
  

}

const e1 = new Employee('Rogerio', 37, 15500);

console.log(e1);
