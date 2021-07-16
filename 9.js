//Resolving callback hell with promises

console.log("Before");
getUser(1, (user) => {
  console.log(user);
  getRepositories(user, (repositories) => {
    console.log(repositories);
    const commits = getCommits(repositories);
    commits.then((res) => console.log(res));
  });
});
console.log("after");

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
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["commit 1", "commit 2", "commit 3"]);
    }, 2000);
  });
}
