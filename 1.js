console.log("Before");
const user = getUser();
console.log(user);
console.log("after");

function getUser() {
  setTimeout(() => {
    console.log("Reading a user from database");
    return { id: 1, gitHubUsername: "usman-afzal-brainx" };
  }, 2000);
}

//Methods for dealing with asynchronous code
//Callbacks
//Promises
//Async/Await
