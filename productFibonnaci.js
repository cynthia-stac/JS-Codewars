function productFib(prod) {
  let x = 0
  let y = 1

  while (x * y < prod) {
    let next = x + y
    x = y
    y = next
  }

 return  (x * y === prod)? [x, y, true] :  [x, y, false]
  

}