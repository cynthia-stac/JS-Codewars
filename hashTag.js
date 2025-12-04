function generateHashtag (str) {
    let st = str.trim()
  if (st.length === 0) return false
  
  let sentence = []
  for (let s of st.split(' ')){
    if(s.length > 0){
      sentence.push(`${s[0].toUpperCase()}${s.slice(1)}`)
    }
    
  }
  let hashtagged = `#${sentence.join('')}`
  
  return (hashtagged.length > 140) ? false : hashtagged
  
}
console.log(generateHashtag ('hello   world  '))