//Callback is a function that we are going to call when the result of asynchronous call is ready
console.log("Before");
getUser((user) => {
  console.log(user);
});
console.log("after");

function getUser(callback) {
  apiCall(callback);
}
function apiCall(callback) {
  setTimeout(() => {
    console.log("Reading a user from database");
    callback({ id: 1, gitHubUsername: "usman-afzal-brainx" });
  }, 5000);
}
