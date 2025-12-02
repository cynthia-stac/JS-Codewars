function countSmileys(arr) {
  let eyes = [":", ";"]
  let nose = ["-", "~"]
  let mouth = [")", "D"]
  
  return arr.filter(v => {
    if (v.length === 2) return eyes.includes(v[0]) && mouth.includes(v[1])
    if (v.length ===3 ) return eyes.includes(v[0]) && nose.includes(v[1]) && mouth.includes(v[2])
    return false
  }).length
  
}