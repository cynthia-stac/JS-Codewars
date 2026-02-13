function scramble(str1, str2) {
  let letters = {}

  // Count letters in str1 once
  for (let char of str1) {
    if (!letters[char]) {
      letters[char] = 1
    } else {
      letters[char]++
    }
  }

  // Check str2
  for (let char of str2) {
    if (!letters[char]) {
      return false
    }
    letters[char]--
  }

  return true
}
