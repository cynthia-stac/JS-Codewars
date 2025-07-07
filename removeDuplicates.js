function solve(arr) {
  const str = new Set();
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!str.has(arr[i])) {
      str.add(arr[i]);
      result.unshift(arr[i]);
      }
  }

  return result;
}
console.log(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));