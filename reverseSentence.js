function reverseWords(str){
  const words = str.split(' ')
  words.reverse().join('')
  return words.join(' ');
}