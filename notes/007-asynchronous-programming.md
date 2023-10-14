### Callbacks

- Callbacks are functions that are passed as arguments to other functions.
- Callbacks by themselves are not asynchronous.
- Errors are handled by passing them as the first argument to the callback.
- Callback hell is a common problem with callbacks. It occurs when there are too many nested callbacks.

### Promises

- Promises help avoid callback hell.
- Promises are objects that represent the eventual completion or failure of an asynchronous operation.
- We define a promise as follows:

```js
const promise = new Promise((resolve, reject) => {
    // do something
    if (/* everything turned out fine */) {
        resolve("Stuff worked!");
    } else {
        reject(Error("It broke"));
    }
})
```

- We can attach `catch` and `then` handlers to a promise.
- `then` handlers are called when the promise is resolved.
- `catch` handlers are called when the promise is rejected.

```js
function doAsyncTask() {
  return new Promise((resolve, reject) => {
    console.log('Async Work Complete')
    resolve()
  })
}

doAsyncTask()
  .then(() => console.log('Task complete'))
  .catch(() => console.log('Error'))
```

- We can call reject and resolve a promise with custom values.

```js
function doAsyncTask() {
  return new Promise((resolve, reject) => {
    console.log('Async Work Complete')
    resolve('Stuff worked!')
  })
}

doAsyncTask()
  .then(val => console.log(val)) // Stuff worked!
  .catch(() => console.log('Error'))
```

- We can return a promise that's already resolved or rejected. These are called settled promises.

```js
function doAsyncTask() {
  return Promise.resolve('Stuff worked!')
  // or return Promise.reject("It broke");
}
```

- Promises are asynchronous by default. Callbacks aren't.
- We can chain promises together using `then`.

```js
const p = Promise.resolve('done!')
p.then(val => {
  console.log(val)
  return 'done2'
}).then(val => {
  // this promise is not called if the above promise does not return anythin
  console.log(val)
})
```

- forking is different from chaining. In forking, we create a new promise from an existing promise.

```js
const p = Promise.resolve('done!')

p.then(val => {
  console.log(val)
  return 'done2'
}).then(val => {
  console.log(val)
})
/* output:
done!
done2
*/

p.then(val => {
  console.log(val)
  return 'done3'
}).then(val => {
  console.log(val)
})

/* output:
done!
done3
*/
```

- In a promise chain, if any of the promises in the chain is rejected, the `catch` handler is called.
- If we throw within a `then` handler, the promise is rejected.
- The `finally` handler is called regardless of whether the promise is resolved or rejected.
- We can use `Promise.all` to run multiple promises in parallel.

```js
const doAsyncTask = delay => {
  return new Promise(resolve => setTimeout(() => resolve(delay), delay))
}

let promises = [doAsyncTask(1000), doAsyncTask(2000), doAsyncTask(5000)]

Promise.all(promises).then(values => console.log(values))
/* output:
[ 1000, 2000, 5000 ]
*/
```

### Async/Await

- Async/await is a way for turning asynchronous code into synchronous-looking code.
- With async/await, we don't need to use `then` and `catch`.

```js
const doAsyncTask = () => Promise.resolve("done")

 async asyncFunc () {
    const result = await doAsyncTask();
    console.log(result);
}

console.log(asyncFunc*()); // done
```
- We can only use `await` within an `async` function.
- We can use try/catch within an async function to handle errors.
```js
const doAsyncTask = () => Promise.reject("error")

async function asyncFunc() {
    try {
        const result = await doAsyncTask();
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

console.log(asyncFunc()); // error
```
- async/await comes with potential performance issues. It's not recommended to use it in performance-critical sections of the code.
