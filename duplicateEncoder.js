function duplicateEncode(word){
   let chars = word.toLowerCase().split('')
   let count = {}
   for (let char of chars){
     count[char] = (count[char] || 0) + 1
   }
  
  return chars.map(char => { 
      let arr = []
      count[char] > 1 ? arr.push(")") : arr.push("(")
      return arr.join('')
  }).join('')
}