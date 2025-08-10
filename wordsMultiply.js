function modifyMultiply(str, loc, num) {
  const words = str.split(' ');       
  const word = words[loc];            
  return Array(num).fill(word).join('-'); 
}
