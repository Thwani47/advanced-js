function doAsyncTask() {
  return new Promise((resolve, reject) => {
    console.log("Async Work Complete");
    resolve();
  });
}

doAsyncTask()
  .then(() => console.log("Task complete"))
  .catch(() => console.log("Error"));

let promise = Promise.resolve("done");
promise.then((val) => console.log(val));

const p = Promise.resolve("done!");
p.then(val => {
    console.log(val);
    return "done2"
}).then(val => {
    console.log(val);
})


const p2 = Promise.resolve("done!");

p2.then(val => {
    console.log(val);
    return "done2"
}).then(val => {
    console.log(val);
})
/* output:
done!
done2
*/

p2.then(val => {
    console.log(val);
    return "done3"
}).then(val => {
    console.log(val);
})

const doAsyncTask2 = delay => {
  return new Promise(resolve => setTimeout(() => resolve(delay), delay));
}
let promises = [doAsyncTask2(1000), doAsyncTask2(2000), doAsyncTask2(500)]

Promise.all(promises).then((values) => console.log(values))
