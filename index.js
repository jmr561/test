const closestToZero = (arr) => {
  if (!arr || arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i]))
      return "All elements of array must be integers";
  }

  let absoluteArr = arr.map((x) => Math.abs(x));
  let closestIntAbsVal = Math.min(...absoluteArr);

  return arr.indexOf(closestIntAbsVal) !== -1
    ? arr[arr.indexOf(closestIntAbsVal)]
    : arr[arr.indexOf(-1 * closestIntAbsVal)];
};

console.log(closestToZero([])); // 0
console.log(closestToZero(undefined)); // 0
console.log(closestToZero()); // 0
console.log(closestToZero([-1.5, 0, 1, 2, 3])); // "All elements of array must be integers"
console.log(closestToZero([-1, 1, 2, 3])); // 1
console.log(closestToZero([-1, 2, 3, 4])); // -1
console.log(closestToZero([100, 101, -200, 30])); // 30
