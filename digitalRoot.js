function digitalRoot(n) {
 const result = n.toString().split('')
 if (result.length === 1){
   return n
 }
  else {
    let sum = result.reduce((acc, val) => acc + Number(val), 0)
    return digitalRoot(sum)
  }
}