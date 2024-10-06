// there are special type of functions in which any function is created
// it actually retains memory of function
// counter is still retained in memory

// closure gives function access to its outer scope

function outer() {
  let counter = 4;
  return function increment() {
    console.log(counter++);
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
