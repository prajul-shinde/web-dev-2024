let balance = 120;
let anotherBalance = new Number(120);
console.log(balance);
console.log(anotherBalance.valueOf());

console.log(typeof balance); //number
console.log(typeof anotherBalance); //object

let isAcive = true;
let isReallyActive = new Boolean(true); //not recommended way

//null and undefined
let firstName;
console.log(firstName); //undefined

let lastName = null;
console.log(lastName); // null;

let myString = "hello";
let myString1 = "hola";
let myString2 = `hola`;

let username = "hitesh";

let oldGreet = myString + " " + "hitesh";
console.log(oldGreet);

let greetMsg = `Hello  ${username} !`;
console.log(greetMsg);
console.log(`value is ${2 * 2}`);

//symbol = generates unique value
let sm1 = Symbol("Prajul");
let sm2 = Symbol("Prajul");
console.log(sm1 == sm2); //false
