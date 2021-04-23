const myFunction = require("./index");

describe("myFunction", () => {
  test("It should return an array", () => {
    const result = myFunction();

    expect(result).toBeInstanceOf(Array);
  });
});
