//Resolving callback hell with promises

async function getData() {
  const user = await getUser(1);
  console.log(user);

  const repositories = await getRepositories(user.gitHubUsername);
  console.log(repositories);

  const commits = await getCommits(repositories[0]);
  console.log(commits);
}

getData();

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
