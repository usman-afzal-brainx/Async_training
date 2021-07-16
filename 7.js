//Promises are the objects which hold the eventual result of an asynchronous operation
//When a promise is created it is in pending state then at this state it kicks off an asynchronous call
//When the result arrrives either the promise is fulfilled or rejected

const promise = new Promise((resolve, reject) => {
  //kick off some asychronous call
  setTimeout(() => {
    reject(new Error("message"));
  }, 2000);
});
promise.catch((err) => console.log(err.message));
