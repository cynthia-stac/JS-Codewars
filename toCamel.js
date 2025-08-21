function toCamelCase(str){
  const words = str.replaceAll("-","_").split("_")
  const sentence= []
  for (let word of words){
    (words.indexOf(word) === 0) ? sentence.push(word) : sentence.push(`${word[0].toUpperCase()}${word.slice(1)}`)
  }
  
  return sentence.join('')
  
}

