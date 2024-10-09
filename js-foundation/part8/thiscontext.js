const person = {
  name: "Prajul",
  greet() {
    console.log(`hi my name is ${this.name}`);
  },
};

person.greet(); // hi my name is prajul

//when we pass this from one memory to another context gets lost
const greetFunction = person.greet;
greetFunction(); // hi my name is undefined

const boundGreet = person.greet.bind({name:`john`});
boundGreet();  // now context is binded
