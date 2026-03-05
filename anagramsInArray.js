function anagramCounter (wordsArray) {
  let obj = {}
  let newArr =  wordsArray.map(word => [...word].sort().join(''))
  for(let word of newArr) obj[word] = (obj[word] || 0) + 1
  return Object.values(obj).map(v => (v * (v - 1)) / 2).reduce((sum, v) => sum + v, 0)
}