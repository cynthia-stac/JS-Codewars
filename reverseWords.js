function reverseWords(str) {
 const words = str.split(" ")
 return words.map((word) => word.split('').reverse().join('')).join(' ')
}