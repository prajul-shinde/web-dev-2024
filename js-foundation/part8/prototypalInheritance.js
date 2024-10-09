function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`hey, my name is ${this.name}`);
};

let prajul = new Person(`prajul`);
prajul.greet();
