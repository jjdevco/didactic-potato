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
    let tempArr = arr;
    let arrSize = tempArr.length;
    let current = 1;

    let highestNumber = -Infinity;

    while (current < arrSize) {
      for (number in tempArr) {
        if (tempArr[number] > highestNumber) highestNumber = tempArr[number];
        current = current + 1;
      }
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
