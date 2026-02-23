function insideOut(x){

  let words = x.split(' ')
  let result = words.map(word => {
    let l = word.length
    let mid = Math.floor(l / 2)
    
    if(l % 2 === 0){
      let left = word.slice(0,mid)
      let right = word.slice(mid)
      return reverse(left) + reverse(right)
    }else{
        let left = word.slice(0,mid)
        let middle = word[mid]
        let right = word.slice(mid + 1)
        return reverse(left) + middle + reverse(right)
    }
    
  })
  
  return result.join(" ")
  
}

function reverse(str){
  return str.split("").reverse().join("")
}