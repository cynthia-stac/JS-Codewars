function high(x){

  let words = x.split(' ')
  let highestScore = 0
  let highestWord = ''
  
  for(let word of words){
      
      let score = 0
      
      for(let letter of word){
          score += letter.charCodeAt(0) - 96
      }
      
      if (score > highestScore){
          highestScore = score
          highestWord = word
      }
      
  }
  
  return highestWord
}