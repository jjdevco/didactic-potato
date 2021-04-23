const myFunction = require("./index");

describe("myFunction", () => {
  test("It should return an array", () => {
    const result = myFunction([1, 2]);
    expect(result).toBeInstanceOf(Array);
  });

  test("The function should throw an error if at least two positives integers were not provided", () => {
    const errorText =
      "You must provide an array with at least two positives integers";
    expect(() => {
      myFunction([]);
    }).toThrow(errorText);

    expect(() => {
      myFunction(["a", undefined, {}]);
    }).toThrow(errorText);

    expect(() => {
      myFunction([5, 20, -7, 13, 0]);
    }).toThrow(errorText);
  });
});
