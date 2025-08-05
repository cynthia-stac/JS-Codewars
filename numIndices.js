function findAll(array, n) {
  const positions = []
  for (let i=0; i <= array.length; i++){
    if(array[i] === n){
      positions.push(i)
    }
  }
  return positions
}