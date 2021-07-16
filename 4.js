//Callback is a function that we are going to call when the result of asynchronous call is ready
console.log("Before");
getUser(1, (user) => {
  console.log(user);
  getRepositories(user, (repositories) => {
    console.log(repositories);
    getCommits(repositories, displayCommits);
  });
});
console.log("after");

function displayCommits(commits, para) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database");
    callback({ id: 1, gitHubUsername: "usman-afzal-brainx" });
  }, 2000);
}
function getRepositories(username, callback) {
  setTimeout(() => {
    callback(["repo 1", "repo 2", "repo 3"]);
  }, 2000);
}
function getCommits(repo, callback) {
  setTimeout(() => {
    callback(["commit 1", "commit 2", "commit 3"]);
  }, 2000);
}
