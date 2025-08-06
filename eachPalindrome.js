function palindrome(num) {
  if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
    return "Not valid";
  }
  const str = num.toString();
  const found = new Set();


  for (let i = 0; i < str.length; i++) {
    for (let j = i + 2; j <= str.length; j++) {
      const sub = str.slice(i, j);

    if (sub === [...sub].reverse().join('') &&  !sub.startsWith('0') && !sub.endsWith('0')){
      found.add(Number(sub));
    }                     
    }
  }
  const result = [...found].sort((a, b) => a - b);
  return result.length ? result : "No palindromes found";
}