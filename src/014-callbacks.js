function doAsyncTask(cb) {
  setTimeout(() => {
    cb(null, "Done");
  }, 0);
}

doAsyncTask((err, data) => {
  if (err) {
    throw err;
  }

  console.log("data: ", data);
});

let message = "Callback Called";


function doAsyncTask2(cb) {
  setTimeout(() => {
    console.log("Async Task Calling Callback");
    cb();
  }, 0);
}

doAsyncTask2(() => {
    doAsyncTask2(() => {
        doAsyncTask2(() => {
            console.log(message);
        });
    })
});