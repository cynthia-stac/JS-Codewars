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


// Typescript

// export function scramble(str1: string, str2: string): boolean {
//   let letters: Record<string, number> = {}

//   for (let char of str1) {
//     letters[char] = (letters[char] || 0) + 1
//   }

//   for (let char of str2) {
//     if (letters[char] === undefined || letters[char] <= 0) {
//       return false
//     }
//     letters[char]--
//   }

//   return true
// }