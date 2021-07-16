//Creating settled promises
//Resolved

const p = Promise.resolve({ id: 1 });
p.then((res) => console.log(res));
