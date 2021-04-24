function myFunction(arr) {
  if (
    !Array.isArray(arr) ||
    arr.length < 2 ||
    !arr.every((el) => typeof el === "number" && parseInt(el) > 0)
  ) {
    throw new Error(
      "You must provide an array with at least two positives integers"
    );
  }

  this.getHighestNumber = function (arr) {
    let highestNumber = -Infinity;

    for (number in arr) {
      if (arr[number] > highestNumber) highestNumber = arr[number];
    }

    return highestNumber;
  };

  this.fill = function (arr) {
    const highestNumber = this.getHighestNumber(arr);

    const tempArr = [];

    for (let i = 1; i <= highestNumber; i++) {
      tempArr.push(i);
    }

    return tempArr;
  };

  return this.fill(arr);
}

module.exports = myFunction;
