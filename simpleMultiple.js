function findMultiples(n, limit) {
  const arr = [];
  if (n>0){
    for(let i=1; i<= limit; i++){
      if (i%n === 0){
        arr.push(i)
      }
    }
    return arr
  }
}