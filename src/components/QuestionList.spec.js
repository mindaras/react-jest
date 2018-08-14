describe("QuestionList", () => {
  beforeAll(() => {
    console.log("before all");
  });

  beforeEach(() => {
    console.log("before each");
  });

  afterAll(() => {
    console.log("after all");
  });

  afterEach(() => {
    console.log("after each");
  });

  it("first test", () => {
    expect(40 + 2).toEqual(42);
  });

  it.skip("second test", () => {
    expect(40 + 2).toEqual(43);
  });
});
