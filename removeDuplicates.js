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
