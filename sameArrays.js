function comp(array1, array2){
  if(array1 === null || array2 === null) return false
  
  if(array1.length !== array2.length) return false
  
  let squared = []
  
  for(let i = 0;i < array1.length; i++ ){
    squared.push(array1[i] * array1[i])
  }
  
  squared.sort((a, b) => a - b)
  array2.sort((a, b) => a -b)
  
  for(let i = 0; i < squared.length; i++){
    if(squared[i] !== array2[i]) return false
  }
  return true
}