function hello() {
  console.log(`i would like to say hello`);
}

setTimeout(() => {
  hello();
}, 2000);
//goes to stack . js event loop doesnt know how to execute so it goes to browser/node env.
// it executes timer function then move it to queue then called and executed in stack.
// for loop gets executed meanwhile
// event loop keeps on checking if there is anything to check
for (let i = 0; i < 10; i++) {
  console.log(i);
}
