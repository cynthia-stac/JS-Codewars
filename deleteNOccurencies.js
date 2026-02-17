function deleteNth(arr,n){
  let count = {}
  let result = []
  
  for (let char of arr){
    count[char] = count[char] ? count[char] + 1 : 1
    
    if(count[char] <= n){
      result.push(char)
    }
    
  }
  
  return result
}