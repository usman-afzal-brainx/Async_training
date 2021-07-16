//Callback hell
console.log("Before");
getUser(1, (user) => {
  console.log(user);
  getRepositories(user, (repositories) => {
    console.log(repositories);
    getCommits(repositories, (commits) => {
      console.log(commits);
    });
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
function getCommits(repo, callback) {
  setTimeout(() => {
    callback(["commit 1", "commit 2", "commit 3"]);
  }, 2000);
}
