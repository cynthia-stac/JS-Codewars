function squareSum(numbers){
   return numbers.map(val => val*val).reduce((sum, cur) => sum += cur,0)
}