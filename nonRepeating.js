function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase()
  let count = {}
  
  for(let st of str){
      count[st] = (count[st] || 0) + 1
  }
  
  let i = 0
  for(let st of str){
      if(count[st] === 1){
          return s[i]
         
      }
       i++
  }
  return ""
}