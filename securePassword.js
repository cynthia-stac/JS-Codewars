function alphanumeric(string){
  
  if (string.length === 0) return false
  
  let alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let digits = '0123456789'
  
  for(let char of string){
    if(!alphabets.includes(char) && !digits.includes(char)) return false
  }
  
  return true
}