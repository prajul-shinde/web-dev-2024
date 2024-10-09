function fetchUserData() {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      resolve({ name: "prajul", age: 29 });
    });
  }, 3000);
}

async function getUserData() {
  try {
    console.log("Fetching userData");
    const userData = await fetchUserData();
    console.log("userData fetched successfully");
    console.log("userData: ", userData);
  } catch (error) {
    console.error("Error fetching userData", error);
  }
}

getUserData();
