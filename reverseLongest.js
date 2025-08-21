function spinWords(string){
  const words = string.split(' ')
  const sentence = []
  for (let word of words){
    if (word.length >= 5){
      const reversedWord = word.split('').reverse().join('')
      sentence.push(reversedWord)
    }
    else{
      sentence.push(word)
    }
  }
  return sentence.join(' ')
}