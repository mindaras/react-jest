import delay from "redux-saga";

it("async test 1", done => {
  setTimeout(done, 100);
});

it("async test 2", () => {
  return new Promise(resolve => {
    setTimeout(resolve, 200);
  });
});

it("async test 3", async () => {
  return await delay(300);
});
