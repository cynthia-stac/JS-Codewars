function duplicateCount(text){
  const count = {}
  for (let char of text.toLowerCase()){
    count[char] = (count[char] || 0) + 1
  }
  return Object.values(count).filter(val => val !== 1).length
}