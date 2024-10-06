// promise is object returned by asychronous function, which represents current state of an operation.
// at a time promise returned to the caller, the operation often isn't finished, but
// promise object provides methods to handle eventual success or failurer of operation.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
