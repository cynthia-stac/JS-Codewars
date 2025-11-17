function replaceCommon(string, letter) {
  let obj = {}
  let s = string.split('').filter(v => v !== ' ').join('')
  for(let str of s) obj[str] = (obj[str] || 0) + 1
  let value = Object.values(obj).sort((a,b) => b-a)[0]
  for(let [k, v] of Object.entries(obj))
    if(v === value) return string.replaceAll(k, letter)
}