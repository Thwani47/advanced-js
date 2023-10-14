const doAsyncTask = () => Promise.resolve("done");

async function asyncFunc() {
  const result = await doAsyncTask();
  console.log(result);
}

asyncFunc();
const doAsyncTask3 = () => Promise.reject("error")

async function asyncFunc2() {
    try {
        const result = await doAsyncTask3();
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

console.log(asyncFunc2()); // done
