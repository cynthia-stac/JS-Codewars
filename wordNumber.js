function order(text){
    if (text === "") return ""
  let words = text.split(' ')
  return words.sort((a, b) => a.split('').filter(v => !isNaN(parseInt(v))) - b.split('').filter(el => !isNaN(parseInt(el)))).join(' ')
}