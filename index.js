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

  this.sort = function (arr) {
    let tempArr = arr;
    let arrSize = tempArr.length;
    let current = 1;

    while (current < arrSize) {
      for (number in tempArr) {
        if (tempArr[current] < tempArr[number]) {
          let temp = tempArr[number];
          tempArr[number] = tempArr[current];
          tempArr[current] = temp;
        }

        current = current + 1;
      }
    }

    return tempArr;
  };

  return this.sort(arr);
}

module.exports = myFunction;
