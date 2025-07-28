function modifyMultiply(str, loc, num) {
  const words = str.split(' ');       
  const word = words[loc];            
  return Array(num).fill(word).join('-'); 
}
console.log(modifyMultiply("Hello World I am glad we met at this time", 3, 5));