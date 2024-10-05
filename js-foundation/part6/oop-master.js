let car = {
  make: "Toyota",
  model: "camry",
  year: 2020,
  start: () => `${this.make} car got started in ${this.year}`,
};
// console.log(car.start());

//constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let john = new Person("John Doe", 20);
// console.log(john.name);

function Animal(type) {
  this.type = type;
}
Animal.prototype.sound = () => `${this.type} makes sound`;

//using classes

// Inheritance
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} is example of inheritance`;
  }
}

// Encapsulation
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

// Abstraction
class CoffeMachine {
  start() {
    //call db
    //filter
    return `starting the machine`;
  }

  brewCoffee() {
    //complex logic
    return `brewing coffee`;
  }

  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `{msgOne}, {msgTwo}`;
  }
}
let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// polymorphism

class Bird {
  fly() {
    return `Flying...`;
  }
}
class Penguin extends Bird {
  fly() {
    return `penguins can't fly`;
  }
}
let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

// static methods
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

// console.log(Calculator.add(2, 3));

//getters setters
class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error(`salary cannot be negative`);
    }
    this.#salary = salary;
  }

  get salary() {
    return `you are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error(`invalid salary`);
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice", -50000);
console.log(emp._salary);
emp.salary = 60000;
