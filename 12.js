//Creating settled promises
//Resolved

const p = Promise.reject(new Error("Error in the asynchronous call"));
p.catch((err) => console.log(err.message));
