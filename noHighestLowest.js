function sumArray(array) {
   
 if (!array || array.length < 2) return 0 
  return array.reduce( (sum, v) => sum + v, 0) - Math.max(...array) - Math.min(...array)
  
}