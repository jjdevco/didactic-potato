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

  return arr;
}

module.exports = myFunction;
