function highAndLow(numbers){
  const lowest = Math.min(...numbers.split(' '))
  const highest = Math.max(...numbers.split(' '))
  return `${highest} ${lowest}`
}