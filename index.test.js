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

  test("The returned array should be ordered in ascending order", () => {
    const arr = [2, 1, 4, 5];
    const result = myFunction(arr);

    expect(result[0]).toEqual(1);
    expect(result[result.length - 1]).toEqual(5);
  });

  test("The function should fill the missing numbers", () => {
    const createFilledArr = (lenght) =>
      Array(lenght)
        .fill(null)
        .map((_, idx) => idx + 1);

    const caseOne = [2, 1, 4, 5];
    const expectedResultOne = createFilledArr(5);
    const resultOne = myFunction(caseOne);

    const caseTwo = [4, 2, 9];
    const expectedResultTwo = createFilledArr(9);
    const resultTwo = myFunction(caseTwo);

    const caseThree = [58, 60, 55];
    const expectedResultThree = createFilledArr(60);
    const resultThree = myFunction(caseThree);

    expect(resultOne).toEqual(expectedResultOne);
    expect(resultTwo).toEqual(expectedResultTwo);
    expect(resultThree).toEqual(expectedResultThree);
  });
});
