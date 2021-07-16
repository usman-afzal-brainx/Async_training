//Resolving callback hell with promises

console.log("Before");
getUser(1)
  .then((user) => getRepositories(user))
  .then((repositories) => getCommits(repositories[0]))
  .then((commits) => console.log(commits));
console.log("after");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from database");
      resolve({ id: 1, gitHubUsername: "usman-afzal-brainx" });
    }, 2000);
  });
}
function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo 1", "repo 2", "repo 3"]);
    }, 2000);
  });
}
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["commit 1", "commit 2", "commit 3"]);
    }, 2000);
  });
}
