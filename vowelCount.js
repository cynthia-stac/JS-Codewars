function getCount(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;

  for (let char of str) {
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}
