function perimeter(n) {
  if (n === 0) return 4
  
  let a = 1
  let b = 1
  let sum = a + b
  
  for(let i = 2; i <= n; i++){
    
    let next = a + b
    sum += next
    a = b
    b = next
    
    
  }
    return sum * 4
}


// Typescript

// export const perimeter = (n:number):number => {
//     if (n === 0) return 4
  
//   let a = 1
//   let b = 1
//   let sum = a + b
  
//   for(let i = 2; i <= n; i++){
    
//     let next = a + b
//     sum += next
//     a = b
//     b = next
    
    
//   }
//     return sum * 4
// }