async function user() {
  try {
    const u = await getUser();
  } catch (err) {
    console.log(err);
  }
}

user();

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from database");
      reject({ id: 1, gitHubUsername: "usman-afzal-brainx" });
    }, 2000);
  });
}
