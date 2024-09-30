const username = {
  firstName: "Prajul",
  isLoggedIn: true,
  "last name": "Shinde",
};
console.log(username);
console.log(typeof username);

username.firstName = "onkar";

console.log(username.firstName); // onkar
console.log(username["last name"]);

// arrays
let anotherUser = ["prajul", true];
console.log(anotherUser[0]);
